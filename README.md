<div id="top"></div>

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/Lund1337/betterdiscord">
    <img src="pre/bd_logo.jpg" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">BetterDiscord Pack</h3>
</div>

<!-- ABOUT THE PROJECT -->
## About

[![Product Name Screen Shot][product-screenshot]](https://i.imgur.com/RB3K3Lm.png)

BetterDiscord pack with custom css, plugins & themes. Everything is customisable to your liking.

<!-- GETTING STARTED -->
## Getting Started
### Prerequisites

First you should download and install the official BetterDiscord client. [Download](https://betterdiscord.app/)

### Installation

1. [Download](https://github.com/Lund1337/betterdiscord/archive/refs/heads/main.zip) the repo.
2. Open the .zip file and open the next folder.
3. Extract only the 'betterdiscord' folder from there.
4. Drag and Drop the 'betterdiscord' folder into 'C:\Users\USER*\AppData\Roaming' or where your default betterdiscord client is installed.

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

Everything is drag and drop, after that just reload Discord 'CTRL+R'.

_If you wish to edit something, check the betterdiscord settings from the discord client settings._

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- things -->
## Included

### Custom CSS

1. Custom Home Button:
```sh
.homeIcon-r0w4ny {
    display: none;
}

.tutorialContainer-1pL9QS .wrapper-3kah-n .childWrapper-1j_1ub {
    background-color: transparent;
}

.tutorialContainer-1pL9QS .wrapper-3kah-n .childWrapper-1j_1ub:before {
    position: absolute;
    content: " ";
    width: 45px; /* Change size if needed */
    height: 45px; /* Change size if needed */
    background-image: url('https://i.imgur.com/eP9MkwW.png'); /* Replace the link, with your image link */
    background-size: contain;
}
  ```

2. Custom Discord Font:
```sh
html, body {
  font-family: 'Roboto Condensed', monospace; /* --== Use a Google Font (https://fonts.google.com/) ==-- */
}
  ```
3. Mini Search Bar:
```sh
:root {
    --transitionspeed: 0.25s;
}

.search-2Mwzzq:not(.open-1F8u2c) .searchBar-jGtisZ {width: 27px; transition: var(--transitionspeed); background-color: transparent;}
.search-2Mwzzq:not(.open-1F8u2c):hover .searchBar-jGtisZ {width: 170px; background-color: var(--background-tertiary);}
.search-2Mwzzq:not(.open-1F8u2c) .iconContainer-1RqWJj {transform: scale(1.3); transition: var(--transitionspeed);}
.search-2Mwzzq:not(.open-1F8u2c):hover .iconContainer-1RqWJj {transform: scale(1);}
.search-2Mwzzq:not(.open-1F8u2c) .icon-18rqoe {color: var(--text-normal);}
.search-2Mwzzq:not(.open-1F8u2c):hover .icon-18rqoe {color: var(--text-muted);}
  ```
4. Custom Background Image: 
```sh
:root {
    --background-image: url('https://i.imgur.com/WC0aEqH.jpg'); /*Change the link to your custom image*/
    --opacity: .95;
}

:root {background:var(--background-image) center/cover no-repeat;opacity:var(--opacity)}
 ```
5. AboutMe Scroll Bar:
```sh
.clamped-2ZePhX{
    -webkit-line-clamp: 190; /*Maximum amount of characters as new lines, unset just breaks links*/
    max-height:112px;
    overflow-x: hidden;
    overflow-y:scroll;
}
.clamped-2ZePhX::-webkit-scrollbar {
  width: 10px;
  height: 15px;
}
.clamped-2ZePhX::-webkit-scrollbar-track {
  border-radius: 10px; /*How round you want the scrollbar to be. 0 is square, 10px is round.*/
  background-color: rgb(255 255 255 / 10%); /*Edit this to what color you want the track to be.*/
}
.clamped-2ZePhX::-webkit-scrollbar-thumb {
  background: linear-gradient(45deg, #d3d3d3, #808080); /* Edit this to whatever color/colors you'd like*/
  border-radius: 10px; /*How round you want the scrollbar thumb to be. 0 is square, 10px is round.*/
}
 ```
6. Rounded Menus:
```sh
.menu-1QACrS, .colorDefault-CDqZdO { 
    border-radius: 15px; 
}
 ```
7. Compact Channels:
```sh
:root {
    --category-spacing: 0px;
    --channel-spacing: 4px;
}

.containerDefault-3TQ5YN, .containerDragAfter-1J_-1V, .containerDragBefore-ei4h1m, .containerUserOver-3woq86 {
    padding-top: var(--category-spacing);
}

.mainContent-20q_Hp {
    padding: var(--channel-spacing);
}
 ```

### Plugins

- [App Notifications](https://github.com/QWERTxD/BetterDiscordPlugins/blob/main/InAppNotifications/InAppNotifications.plugin.js)
- [Auto Start Rich Presence](https://github.com/Mega-Mewthree/BetterDiscordPlugins/tree/master/Plugins/AutoStartRichPresence)
- [BDFDB](https://github.com/mwittrien/BetterDiscordAddons/tree/master/Library/)
- [Better Formatting Redux](https://raw.githubusercontent.com/rauenzi/BetterDiscordAddons/master/Plugins/BetterFormattingRedux/BetterFormattingRedux.plugin.js)
- [Better Friend List](https://github.com/mwittrien/BetterDiscordAddons/tree/master/Plugins/BetterFriendList/)
- [Better Invites](https://github.com/HypedDomi/BetterDiscordStuff/tree/main/Plugins/BetterInvites)
- [Better NSFW Tag](https://github.com/mwittrien/BetterDiscordAddons/tree/master/Plugins/BetterNsfwTag/)
- [Better Role Colors](https://raw.githubusercontent.com/rauenzi/BetterDiscordAddons/master/Plugins/BetterRoleColors/BetterRoleColors.plugin.js)
- [Better Search Page](https://github.com/mwittrien/BetterDiscordAddons/tree/master/Plugins/BetterSearchPage/)
- [Bigger Stream Preview](https://github.com/jaimeadf/BetterDiscordPlugins/tree/release/src/BiggerStreamPreview)
- [BlurNSFW](https://raw.githubusercontent.com/rauenzi/BetterDiscordAddons/master/Plugins/BlurNSFW/BlurNSFW.plugin.js)
- [Call Time Counter](https://github.com/QWERTxD/BetterDiscordPlugins/blob/main/CallTimeCounter/CallTimeCounter.plugin.js)
- [Char Counter](https://github.com/mwittrien/BetterDiscordAddons/tree/master/Plugins/CharCounter/)
- [Complete TimeStamps](https://github.com/mwittrien/BetterDiscordAddons/tree/master/Plugins/CompleteTimestamps/)
- [Creation Date](https://github.com/mwittrien/BetterDiscordAddons/tree/master/Plugins/CreationDate/)
- [Discord Activities](https://github.com/QWERTxD/BetterDiscordPlugins/DiscordActivities)
- [Do Not Track](https://raw.githubusercontent.com/rauenzi/BetterDiscordAddons/master/Plugins/DoNotTrack/DoNotTrack.plugin.js)
- [Double Click to Edit](https://github.com/Farcrada/DiscordPlugins/blob/master/Double-click-to-edit/DoubleClickToEdit.plugin.js)
- [File Viewer](https://github.com/TheGreenPig/BetterDiscordPlugins/main/FileViewer/FileViewer.plugin.js)
- [Game Activity Toggle](https://github.com/mwittrien/BetterDiscordAddons/tree/master/Plugins/GameActivityToggle/)
- [Hide Channels](https://raw.githubusercontent.com/CapnKitten/BetterDiscord/master/Plugins/HideChannels/HideChannels.plugin.js)
- [Hide Disabled Emojis](https://github.com/rauenzi/BetterDiscordAddons/blob/master/Plugins/HideDisabledEmojis/HideDisabledEmojis.plugin.js)
- [Hide Stream Preview](https://raw.githubusercontent.com/danegottwald/BetterDiscordPlugins/main/HideStreamPreview/HideStreamPreview.plugin.js)
- [Image Utilities](https://github.com/mwittrien/BetterDiscordAddons/tree/master/Plugins/ImageUtilities/)
- [Invisible Typing](https://github.com/Strencher/BetterDiscordStuff/blob/master/InvisibleTyping/InvisibleTyping.plugin.js)
- [Joined At Date](https://github.com/mwittrien/BetterDiscordAddons/tree/master/Plugins/JoinedAtDate/)
- [Link Profile Picture](https://github.com/Inve1951/BetterDiscordStuff/blob/master/plugins/linkProfilePicture.plugin.js)
- [Link Banner](https://github.com/Echological/LinkBanner/blob/41703a55d6103e420cd42a45f6a78b6cdb9dc8a6/LinkBanner.plugin.js)
- [Message Logger](https://github.com/1Lighty/BetterDiscordPlugins/blob/master/Plugins/MessageLoggerV2/MessageLoggerV2.plugin.js)
- [Message Utilities](https://github.com/mwittrien/BetterDiscordAddons/tree/master/Plugins/MessageUtilities/)
- [Online Friend Count](https://github.com/Zerthox/BetterDiscord-Plugins/tree/master/src/OnlineFriendCount)
- [Open Steam Links in App](https://github.com/mwittrien/BetterDiscordAddons/tree/master/Plugins/OpenSteamLinksInApp/)
- [Permission Viewer](https://raw.githubusercontent.com/rauenzi/BetterDiscordAddons/master/Plugins/PermissionsViewer/PermissionsViewer.plugin.js)
- [Platform Indicator](https://github.com/Strencher/BetterDiscordStuff/blob/6b3581f58ef95dcaa13079998687ab82dee24362/PlatformIndicators/APlatformIndicators.plugin.js)
- [Pro Profile](https://github.com/iamehsandvr/ProProfile)
- [Read All Notifications Button](https://github.com/mwittrien/BetterDiscordAddons/tree/master/Plugins/ReadAllNotificationsButton/)
- [Remove Blocked Users](https://github.com/mwittrien/BetterDiscordAddons/tree/master/Plugins/RemoveBlockedUsers/)
- [Remove Nicknames](https://github.com/mwittrien/BetterDiscordAddons/tree/master/Plugins/RemoveNicknames/)
- [Server Counter](https://github.com/mwittrien/BetterDiscordAddons/tree/master/Plugins/ServerCounter/)
- [Server Details](https://github.com/mwittrien/BetterDiscordAddons/tree/master/Plugins/ServerDetails/)
- [Show All Activities](https://github.com/Strencher/BetterDiscordStuff/tree/master/ShowAllActivities)
- [Show Connections](https://github.com/mwittrien/BetterDiscordAddons/tree/master/Plugins/ShowConnections/)
- [Show Hidden Channels](https://github.com/mwittrien/BetterDiscordAddons/tree/master/Plugins/ShowHiddenChannels/) (NOT WORKING)
- [Split Large Messages](https://github.com/mwittrien/BetterDiscordAddons/tree/master/Plugins/SplitLargeMessages/)
- [Spotify Controls](https://github.com/mwittrien/BetterDiscordAddons/tree/master/Plugins/SpotifyControls/)
- [Spotify Listen Along](https://github.com/ordinall/BetterDiscord-Stuff/tree/master/Plugins/SpotifyListenAlong/)
- [Typing Indicator](https://github.com/l0c4lh057/BetterDiscordStuff/blob/master/Plugins/TypingIndicator/TypingIndicator.plugin.js)
- [Typing User Avatars](https://github.com/QWERTxD/BetterDiscordPlugins/blob/main/TypingUsersAvatars/TypingUsersAvatars.plugin.js)
- [XenoLib](https://github.com/1Lighty/BetterDiscordPlugins/blob/master/Plugins/1XenoLib.plugin.js)
- [ZeresPluginLibrary](https://raw.githubusercontent.com/rauenzi/BDPluginLibrary/master/release/0PluginLibrary.plugin.js)

### Themes

- [Dusk to Dawn](https://github.com/Asteria5675/BetterDiscordThemes/tree/master/previews)
- [Emoji Replace](https://github.com/mwittrien/BetterDiscordAddons/tree/master/Themes/EmojiReplace/)
- [Channel Indicators](https://github.com/Discord-Theme-Addons/modern-channel-indicators/tree/main/src)
- [Radial Status](https://github.com/DiscordStyles/RadialStatus)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
[product-screenshot]: pre/screenshot.png
