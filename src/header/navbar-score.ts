import { ulNavbar } from './navbar';

const liNavbarScore = document.createElement('li');
liNavbarScore.className = 'navbar-item';
ulNavbar.append(liNavbarScore);

export const linkNavbarScore = document.createElement('a');
linkNavbarScore.href = '#';
linkNavbarScore.className = `navbar-link`;
linkNavbarScore.id = 'score';
liNavbarScore.append(linkNavbarScore);

const svgLinkScore = document.createElement('svg');
linkNavbarScore.append(svgLinkScore);

const paragraphScore = document.createElement('p');
paragraphScore.innerHTML = 'Best Score';
linkNavbarScore.append(paragraphScore);
