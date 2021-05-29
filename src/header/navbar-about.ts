import { ulNavbar } from './navbar';

const liNavbarAbout = document.createElement('li');
liNavbarAbout.className = 'navbar-item';
ulNavbar.append(liNavbarAbout);

export const linkNavbarAbout = document.createElement('a');
linkNavbarAbout.href = '#';
linkNavbarAbout.className = `navbar-link`;
linkNavbarAbout.id = 'about';
liNavbarAbout.append(linkNavbarAbout);

const svgLinkAbout = document.createElement('svg');
linkNavbarAbout.append(svgLinkAbout);

const paragraphAbout = document.createElement('p');
paragraphAbout.innerHTML = 'About Game';
linkNavbarAbout.append(paragraphAbout);
