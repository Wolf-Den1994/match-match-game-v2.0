import { ulNavbar } from './navbar';

const liNavbarSettings = document.createElement('li');
liNavbarSettings.className = 'navbar-item';
ulNavbar.append(liNavbarSettings);

export const linkNavbarSettings = document.createElement('a');
linkNavbarSettings.href = '#';
linkNavbarSettings.className = `navbar-link`;
linkNavbarSettings.id = 'settings';
liNavbarSettings.append(linkNavbarSettings);

const svgLinkSettings = document.createElement('svg');
linkNavbarSettings.append(svgLinkSettings);

const paragraphSettings = document.createElement('p');
paragraphSettings.innerHTML = 'Game Settings';
linkNavbarSettings.append(paragraphSettings);
