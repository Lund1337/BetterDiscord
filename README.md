<div id="top"></div>
<br>
<div align="center">
  <h3 align="center">BetterDiscord Pack</h3>
</div>

<!-- ABOUT THE PROJECT -->

## About

![product-screenshot](https://i.imgur.com/0IoT14K.png)

BetterDiscord pack with custom css, plugins & themes. Everything is customisable to your liking.

<!-- GETTING STARTED -->

## Getting Started

### Prerequisites

First you should download and install the official BetterDiscord client. [Download](https://betterdiscord.app/)

### Installation

1. [Download](https://github.com/Lund1337/betterdiscord/archive/refs/heads/main.zip) the repo.
2. Open the .zip file and open the next folder.
3. Extract themes and plugins folder.
4. Drag and Drop them into 'C:\Users\USER\*\AppData\Roaming' or where your default betterdiscord client is installed.

### Custom CSS

`

# Add custom home icon

.homeIcon-r0w4ny {
display: none;
}

.tutorialContainer-1pL9QS .wrapper-3kah-n .childWrapper-1j_1ub {
background-color: transparent;
}

.tutorialContainer-1pL9QS .wrapper-3kah-n .childWrapper-1j*1ub:before {
position: absolute;
content: " ";
width: 45px; /*Change size if needed*/
height: 45px; /*Change size if needed\*/
background-image: url('https://raw.githubusercontent.com/Lund1337/Lund1337.github.io/main/Images/Icons/Icon_L.gif'); /\_ Replace the link, with your image link \_/
background-size: contain;
}

# Compact channels categories

:root {
--category-spacing: 0px;
--channel-spacing: 4px;
}

.containerDefault-3TQ5YN, .containerDragAfter-1J\_-1V, .containerDragBefore-ei4h1m, .containerUserOver-3woq86 {
padding-top: var(--category-spacing);
}

.mainContent-20q_Hp {
padding: var(--channel-spacing);
}

# Minified Search Bar

:root {
--transitionspeed: 0.25s;
}

.search-2Mwzzq:not(.open-1F8u2c) .searchBar-jGtisZ {width: 27px; transition: var(--transitionspeed); background-color: transparent;}
.search-2Mwzzq:not(.open-1F8u2c):hover .searchBar-jGtisZ {width: 170px; background-color: var(--background-tertiary);}
.search-2Mwzzq:not(.open-1F8u2c) .iconContainer-1RqWJj {transform: scale(1.3); transition: var(--transitionspeed);}
.search-2Mwzzq:not(.open-1F8u2c):hover .iconContainer-1RqWJj {transform: scale(1);}
.search-2Mwzzq:not(.open-1F8u2c) .icon-18rqoe {color: var(--text-normal);}
.search-2Mwzzq:not(.open-1F8u2c):hover .icon-18rqoe {color: var(--text-muted);}
`

<!-- USAGE EXAMPLES -->

## Usage

Everything is drag and drop, after that just reload Discord 'CTRL+R'.

*If you wish to edit something, check the betterdiscord settings from the discord client settings, or edit the theme/plugins manually.*
