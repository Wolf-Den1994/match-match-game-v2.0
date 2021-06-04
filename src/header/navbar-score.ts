import { Tags } from '../utils/enum';
import { ulNavbar } from './navbar';

const liNavbarScore = document.createElement(Tags.LiItem);
liNavbarScore.className = 'navbar-item';
ulNavbar.append(liNavbarScore);

export const linkNavbarScore = document.createElement(Tags.Link);
linkNavbarScore.href = '#';
linkNavbarScore.className = `navbar-link`;
linkNavbarScore.id = 'score';
liNavbarScore.append(linkNavbarScore);

const svgLinkScore = document.createElement(Tags.Svg);
linkNavbarScore.append(svgLinkScore);

const paragraphScore = document.createElement(Tags.Paragraph);
paragraphScore.innerHTML = 'Best Score';
linkNavbarScore.append(paragraphScore);
