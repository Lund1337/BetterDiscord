/**
 * @name DateViewer
 * @author Arashiryuu
 * @version 1.0.0
 * @description Displays the current date, weekday, and time.
 * @authorId 238108500109033472
 * @authorLink https://github.com/Arashiryuu
 * @website https://github.com/Arashiryuu/crap
 * @source https://github.com/Arashiryuu/crap/blob/master/BdApi/DateViewer/DateViewer.plugin.js
 */

// @ts-check
/* global BdApi */

/**
 * @typedef Plugin
 * @type {import('./types').Plugin}
 */

/**
 * @typedef MetaData
 * @type {import('./types').MetaData}
 */

/**
 * @typedef Logger
 * @type {import('./types').Logger}
 */

/**
 * @typedef PromiseState
 * @type {import('./types').PromiseStateManager}
 */

/*@cc_on
@if (@_jscript)
	
	// Offer to self-install for clueless users that try to run this directly.
	var shell = WScript.CreateObject('WScript.Shell');
	var fs = new ActiveXObject('Scripting.FileSystemObject');
	var pathPlugins = shell.ExpandEnvironmentStrings('%APPDATA%\\BetterDiscord\\plugins');
	var pathSelf = WScript.ScriptFullName;
	// Put the user at ease by addressing them in the first person
	shell.Popup('It looks like you\'ve mistakenly tried to run me directly. \n(Don\'t do that!)', 0, 'I\'m a plugin for BetterDiscord', 0x30);
	if (fs.GetParentFolderName(pathSelf) === fs.GetAbsolutePathName(pathPlugins)) {
		shell.Popup('I\'m in the correct folder already.\nJust reload Discord with Ctrl+R.', 0, 'I\'m already installed', 0x40);
	} else if (!fs.FolderExists(pathPlugins)) {
		shell.Popup('I can\'t find the BetterDiscord plugins folder.\nAre you sure it\'s even installed?', 0, 'Can\'t install myself', 0x10);
	} else if (shell.Popup('Should I copy myself to BetterDiscord\'s plugins folder for you?', 0, 'Do you need some help?', 0x34) === 6) {
		fs.CopyFile(pathSelf, fs.BuildPath(pathPlugins, fs.GetFileName(pathSelf)), true);
		// Show the user where to put plugins in the future
		shell.Exec('explorer ' + pathPlugins);
		shell.Popup('I\'m installed!\nJust reload Discord with Ctrl+R.', 0, 'Successfully installed', 0x40);
	}
	WScript.Quit();

@else@*/

/**
 * @param {MetaData} meta
 * @returns {!Plugin}
 */
module.exports = (meta) => {
	// @ts-ignore
	const Api = new BdApi(meta.name);
	const { UI, DOM, Data, React, Utils, Themes, Plugins, Patcher, Webpack, ReactDOM, ReactUtils, ContextMenu } = Api;
	const { Filters, getModule, waitForModule } = Webpack;

	const raf = requestAnimationFrame;
	const has = Object.prototype.hasOwnProperty;
	const toString = Object.prototype.toString;

	/* Utility */

	/**
	 * @type {PromiseState}
	 */
	const promises = {
		state: { cancelled: false },
		cancel () { this.state.cancelled = true; },
		restore () { this.state.cancelled = false; }
	};

	/**
	 * Creates clean objects with a Symbol.toStringTag value describing the object.
	 * @param {!string} value
	 * @returns {!object}
	 */
	const NullObject = (value = 'NullObject') => Object.create(null, {
		[Symbol.toStringTag]: {
			value
		}
	});

	/**
	 * @type {Logger}
	 */
	// @ts-ignore
	const Logger = NullObject('Logger');
	{
		const levels = ['log', 'info', 'warn', 'debug', 'error'];
		/**
		 * @param {!string} label 
		 * @returns {!string[]}
		 */
		const useParts = (label) => [
			`%c[${label}] \u2014%c`,
			'color: #59f;',
			'',
			new Date().toUTCString()
		];
		for (const level of levels) {
			Logger[level] = (function () {
				console.groupCollapsed.apply(null, useParts(meta.name));
				console[level].apply(null, arguments);
				console.groupEnd();
			}).bind(Logger);
		}
	}

	/**
	 * 
	 * @param {!object} instance
	 * @returns {void}
	 */
	const applyBinds = (instance) => {
		const methods = Object.getOwnPropertyNames(instance).filter((name) => typeof instance[name] === 'function');
		for (const method of methods) instance[method] = instance[method].bind(instance);
	};

	applyBinds(promises);

	/**
	 * @param {!object} obj
	 * @param {!string} path
	 * @returns {*}
	 */
	const getProp = (obj, path) => path.split(/\s?\.\s?/g).reduce((o, prop) => o && o[prop], obj);

	/**
	 * @type {Plugin}
	 */
	const plugin = NullObject('Plugin');

	/* Setup */

	/**
	 * Converts a classname string into a class selector.
	 * @param {!string} className
	 * @returns {!string}
	 */
	const toSelector = (className) => '.' + className.split(' ').join('.');

	const memberListClasses = Webpack.getModule(Webpack.Filters.byProps('members', 'container'));
	/**
	 * Current selector for the member-list.
	 */
	const memberListSelector = toSelector(memberListClasses.members);

	/**
	 * CSS formatter helper.
	 * @param {!string} ss 
	 * @returns {!string}
	 */
	const css = (ss = '') => ss.split(/\s+/g).join(' ').trim();

	const style = css(`
		#dv-mount {
			background-color: #2f3136;
			bottom: 0;
			box-sizing: border-box;
			display: flex;
			height: 95px;
			justify-content: center;
			position: fixed;
			width: 240px;
			z-index: 1;
		}
		#dv-main {
			--gap: 20px;
			background-color: transparent;
			border-top: 1px solid hsla(0, 0%, 100%, .04);
			box-sizing: border-box;
			color: #fff;
			display: flex;
			flex-direction: column;
			height: 100%;
			line-height: 20px;
			justify-content: center;
			text-align: center;
			text-transform: uppercase;
			width: calc(100% - var(--gap) * 2);
		}
		#dv-main .dv-date {
			font-size: small;
			opacity: .6;
		}
		.theme-light #dv-mount {
			background-color: #f3f3f3;
		}
		.theme-light #dv-main {
			border-top: 1px solid #e6e6e6;
			color: #737f8d;
		}
		${memberListSelector} {
			margin-bottom: 95px;
		}
	`);

	/**
	 * A `document.createElement` helper function.
	 * @param {!string} type 
	 * @param {!object} props
	 * @param {!(string | Node)[]} [children]
	 * @returns {!HTMLElement}
	 */
	const create = (type = 'div', props = {}, ...children) => {
		if (typeof type !== 'string') type = 'div';
		const e = document.createElement(type);

		if (toString.call(props) !== '[object Object]') {
			if (children.length) e.append.apply(children);
			return e;
		}

		if (!has.call(props, 'children') && children.length) {
			e.append(...children);
		}

		/**
		 * @param {!string} key
		 * @returns {!string}
		 */
		const normalize = (key) => key === 'doubleclick'
			? 'dblclick'
			: key;

		/**
		 * @param {!string} key 
		 * @returns {!boolean}
		 */
		const isEvent = (key) => key.slice(0, 2) === 'on' && key[2] === key[2].toUpperCase();

		/**
		 * @param {!string} key
		 * @returns {!boolean}
		 */
		const isDataAttr = (key) => key.startsWith('data') && key.toLowerCase() !== key; // dataId

		/**
		 * @param {!string} key
		 * @returns {!string} key
		 */
		const normalizeDataAttr = (key) => key.replace(/([A-Z]{1})/g, '-$1').toLowerCase();

		for (const key of Object.keys(props)) {
			switch (key) {
				case 'text': {
					e.textContent = props[key];
					break;
				}
				case 'style': {
					try {
						Object.assign(e[key], props[key]);
					} catch (fail) {
						Logger.error(fail);
					}
					break;
				}
				case 'className': {
					e.className = props[key];
					break;
				}
				case 'htmlFor': {
					e.setAttribute('for', props[key]);
					break;
				}
				case 'classList':
				case 'classes': {
					if (!Array.isArray(props[key])) props[key] = [props[key]];
					e.classList.add(...props[key]);
					break;
				}
				case 'children': {
					if (!Array.isArray(props[key])) props[key] = [props[key]];
					e.append.apply(props[key]);
					break;
				}
				default: {
					if (isEvent(key)) {
						const event = normalize(key.slice(2).toLowerCase());
						e.addEventListener(event, props[key]);
						break;
					}
					if (isDataAttr(key)) {
						const attr = normalizeDataAttr(key);
						e.setAttribute(attr, props[key]);
						break;
					}
					e.setAttribute(key, props[key]);
					break;
				}
			}
		}

		// @ts-ignore
		e.$$props = props;
		return e;
	};

	const getData = () => {
		const d = new Date();
		const l = document.documentElement.lang;
		return {
			time: d.toLocaleTimeString(l, { hour12: false }),
			date: d.toLocaleDateString(l, { day: '2-digit', month: '2-digit', year: 'numeric' }),
			weekday: d.toLocaleDateString(l, { weekday: 'long' })
		};
	};

	const useAnimationFrame = (callback) => {
		const cbRef = React.useRef(callback);
		const frame = React.useRef();

		const animate = React.useCallback((now) => {
			cbRef.current();
			frame.current = raf(animate);
		}, []);

		React.useLayoutEffect(() => {
			frame.current = raf(animate);
			return () => frame.current && cancelAnimationFrame(frame.current);
		}, []);
	};

	const ErrorBoundary = class ErrorBoundary extends React.Component {
		state = { hasError: false };

		static getDerivedStateFromError (error) {
			return { hasError: true };
		}

		componentDidCatch (error, info) {
			Logger.error(error, info);
		}

		render () {
			if (this.state.hasError) return React.createElement('div', { className: `${meta.name}-error` }, 'Component Error');
			// @ts-ignore
			return this.props.children;
		}
	};

	const WrapBoundary = (Original) => (props) => React.createElement(ErrorBoundary, null, React.createElement(Original, props));

	/**
	 * @returns {!React.ElementType<HTMLElement>}
	 */
	const Viewer = () => {
		const [state, setState] = React.useState(getData);
		const update = React.useCallback(() => setState(getData), []);
		const ref = React.useRef();

		useAnimationFrame(update);

		return React.createElement('div', {
			id: 'dv-main',
			ref: ref,
			key: 'dv_viewer_main',
			children: [
				React.createElement('span', { key: 'dv_viewer_time', className: 'dv-time' }, state.time),
				React.createElement('span', { key: 'dv_viewer_date', className: 'dv-date' }, state.date),
				React.createElement('span', { key: 'dv_viewer_weekday', className: 'dv-weekday' }, state.weekday)
			]
		});
	};

	const WrappedViewer = WrapBoundary(Viewer);

	const dataZero = getData();
	const viewRoot = create('div', { id: 'dv-mount' });
	const viewMain = create('div', { id: 'dv-main' });
	const time = create('span', { class: 'dv-time' }, dataZero.time);
	const date = create('span', { class: 'dv-date' }, dataZero.date);
	const weekday = create('span', { class: 'dv-weekday' }, dataZero.weekday);
	viewMain.append(time, date, weekday);
	viewRoot.append(viewMain);

	const removeRoot = () => viewRoot.isConnected && viewRoot.remove();
	const appendRoot = () => {
		const list = document.querySelector(memberListSelector);
		if (!list || viewRoot.isConnected) return;
		list.appendChild(viewRoot);
	};

	const setData = () => {
		const { time: t, date: d, weekday: w } = getData();
		if (time.textContent !== t) time.textContent = t;
		if (date.textContent !== d) date.textContent = d;
		if (weekday.textContent !== w) weekday.textContent = w;
	};

	const ref = { current: null };
	const teeUpdates = () => {
		setData();
		ref.current = raf(teeUpdates);
	};
	const cancelUpdates = () => ref.current && cancelAnimationFrame(ref.current);

	const connect = () => {
		ReactDOM.render(React.createElement(WrappedViewer, {}), viewRoot);
	};

	const disconnect = () => {
		ReactDOM.unmountComponentAtNode(viewRoot);
	};

	const onStart = () => {
		DOM.addStyle(style);
		appendRoot();
		connect(); // teeUpdates();
	};

	const onStop = () => {
		DOM.removeStyle();
		cancelUpdates();
		removeRoot();
		disconnect();
	};

	/* Build */

	Object.assign(plugin, {
		start () {
			promises.restore();
			raf(onStart);
		},
		stop () {
			promises.cancel();
			raf(onStop);
		},
		/**
		 * Global observer provided by BD.
		 * @param {!MutationRecord} change
		 */
		observer (change) {
			if (!viewRoot.isConnected) raf(() => appendRoot());
		}
	});

	/* Finalize */

	applyBinds(plugin);
	return plugin;
};

/*@end@*/
