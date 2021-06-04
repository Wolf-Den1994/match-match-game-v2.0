import { Tags } from '../utils/enum';
import { ulNavbar } from './navbar';

const liNavbarSettings = document.createElement(Tags.LiItem);
liNavbarSettings.className = 'navbar-item';
ulNavbar.append(liNavbarSettings);

export const linkNavbarSettings = document.createElement(Tags.Link);
linkNavbarSettings.href = '#';
linkNavbarSettings.className = `navbar-link`;
linkNavbarSettings.id = 'settings';
liNavbarSettings.append(linkNavbarSettings);

const svgLinkSettings = document.createElement(Tags.Svg);
linkNavbarSettings.append(svgLinkSettings);

const paragraphSettings = document.createElement(Tags.Paragraph);
paragraphSettings.innerHTML = 'Game Settings';
linkNavbarSettings.append(paragraphSettings);
