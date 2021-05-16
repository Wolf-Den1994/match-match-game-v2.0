import { gameField } from '../game/field';
import { objWithSetting } from '../game/obj-setting';
import { renderField } from '../game/render-field';
import { about } from './about';
import { score } from './score';
import { settings } from './settings';

interface IRoutes {
  [key: string]: string;
}

const routes: IRoutes = {
  '/': about,
  '/score': score,
  '/settings': settings,
  '/game': gameField,
};

const header = document.createElement('header');
header.className = 'header';
document.body.append(header);

const divHeaderLeft = document.createElement('div');
divHeaderLeft.className = 'header-left';
header.append(divHeaderLeft);

const btnRegister = document.createElement('button');
btnRegister.className = 'btn-register';
btnRegister.innerHTML = `register new player`;
header.append(btnRegister);

const btnStartGame = document.createElement('button');
btnStartGame.className = 'btn-start-game hidden';
btnStartGame.innerHTML = `start game`;
header.append(btnStartGame);

const btnStopGame = document.createElement('button');
btnStopGame.className = 'btn-stop-game hidden';
btnStopGame.innerHTML = `stop game`;
header.append(btnStopGame);

const divLogo = document.createElement('div');
divLogo.className = 'logo';
divHeaderLeft.append(divLogo);

const logoLink = document.createElement('a');
logoLink.href = '#';
logoLink.className = 'logo-link';
divLogo.append(logoLink);

const spanLogoTop = document.createElement('span');
spanLogoTop.className = 'logo-top';
spanLogoTop.innerHTML = `match`;
logoLink.append(spanLogoTop);

const spanLogoBottom = document.createElement('span');
spanLogoBottom.className = 'logo-bottom';
spanLogoBottom.innerHTML = `match`;
logoLink.append(spanLogoBottom);

const ulNavbar = document.createElement('ul');
ulNavbar.className = 'navbar-list';
divHeaderLeft.append(ulNavbar);

const liNavbarAbout = document.createElement('li');
liNavbarAbout.className = 'navbar-item';
ulNavbar.append(liNavbarAbout);

const linkNavbarAbout = document.createElement('a');
linkNavbarAbout.href = '#';
linkNavbarAbout.className = `navbar-link`;
linkNavbarAbout.id = 'about';
liNavbarAbout.append(linkNavbarAbout);

const svgLinkAbout = document.createElement('svg');
linkNavbarAbout.append(svgLinkAbout);

const paragraphAbout = document.createElement('p');
paragraphAbout.innerHTML = 'About Game';
linkNavbarAbout.append(paragraphAbout);

const liNavbarScore = document.createElement('li');
liNavbarScore.className = 'navbar-item';
ulNavbar.append(liNavbarScore);

const linkNavbarScore = document.createElement('a');
linkNavbarScore.href = '#';
linkNavbarScore.className = `navbar-link`;
linkNavbarScore.id = 'score';
liNavbarScore.append(linkNavbarScore);

const svgLinkScore = document.createElement('svg');
linkNavbarScore.append(svgLinkScore);

const paragraphScore = document.createElement('p');
paragraphScore.innerHTML = 'Best Score';
linkNavbarScore.append(paragraphScore);

const liNavbarSettings = document.createElement('li');
liNavbarSettings.className = 'navbar-item';
ulNavbar.append(liNavbarSettings);

const linkNavbarSettings = document.createElement('a');
linkNavbarSettings.href = '#';
linkNavbarSettings.className = `navbar-link`;
linkNavbarSettings.id = 'settings';
liNavbarSettings.append(linkNavbarSettings);

const svgLinkSettings = document.createElement('svg');
linkNavbarSettings.append(svgLinkSettings);

const paragraphSettings = document.createElement('p');
paragraphSettings.innerHTML = 'Game Settings';
linkNavbarSettings.append(paragraphSettings);

export const root = document.createElement('div');
root.id = 'root';
document.body.append(root);
root.innerHTML = routes[window.location.pathname];

const navbarLinks = document.querySelectorAll('.navbar-link');

if (root) root.innerHTML = routes[window.location.pathname];
if (linkNavbarAbout) linkNavbarAbout.classList.add('active');

export function pollOfElections(): void {
  const selectCard = document.querySelector('#select-card');
  const selectDifficulty = document.querySelector('#select-difficulty');
  if (selectCard instanceof HTMLSelectElement) {
    objWithSetting.card = selectCard.value;
  }
  if (selectDifficulty instanceof HTMLSelectElement) {
    objWithSetting.difficulty = selectDifficulty.value;
  }
  setTimeout(pollOfElections, 1000);
}

const onNavigate = (pathname: string) => {
  window.history.pushState({}, pathname, window.location.origin + pathname);
  if (root) root.innerHTML = routes[pathname];
  if (pathname === '/game') {
    const field = <HTMLElement>document.querySelector('.main-field');
    renderField(field);
  }
  pollOfElections();
};

btnStartGame.onclick = () => {
  navbarLinks.forEach((link) => {
    link.className = 'navbar-link';
  });
  onNavigate('/game');
  return false;
};
logoLink.onclick = () => {
  navbarLinks.forEach((link) => {
    link.className = 'navbar-link';
  });
  linkNavbarAbout.classList.add('active');
  onNavigate('/');
  return false;
};
linkNavbarAbout.onclick = () => {
  navbarLinks.forEach((link) => {
    link.className = 'navbar-link';
  });
  linkNavbarAbout.classList.add('active');
  onNavigate('/');
  return false;
};
linkNavbarScore.onclick = () => {
  navbarLinks.forEach((link) => {
    link.className = 'navbar-link';
  });
  linkNavbarScore.classList.add('active');
  onNavigate('/score');
  return false;
};
linkNavbarSettings.onclick = () => {
  navbarLinks.forEach((link) => {
    link.className = 'navbar-link';
  });
  linkNavbarSettings.classList.add('active');
  onNavigate('/settings');
  return false;
};

window.onpopstate = () => {
  if (root) root.innerHTML = routes[window.location.pathname];
};
