import { Tags } from '../utils/enum';
import { ulNavbar } from './navbar';

const liNavbarAbout = document.createElement(Tags.LiItem);
liNavbarAbout.className = 'navbar-item';
ulNavbar.append(liNavbarAbout);

export const linkNavbarAbout = document.createElement(Tags.Link);
linkNavbarAbout.href = '#';
linkNavbarAbout.className = `navbar-link`;
linkNavbarAbout.id = 'about';
liNavbarAbout.append(linkNavbarAbout);

const svgLinkAbout = document.createElement(Tags.Svg);
linkNavbarAbout.append(svgLinkAbout);

const paragraphAbout = document.createElement(Tags.Paragraph);
paragraphAbout.innerHTML = 'About Game';
linkNavbarAbout.append(paragraphAbout);
