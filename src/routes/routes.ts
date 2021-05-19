import { btnFinal } from '../final/final-html';
import { gameField } from '../game/field';
import { objWithSetting } from '../game/obj-setting';
import { renderField } from '../game/render-field';
import {
  btnStartGame,
  btnStopGame,
  linkNavbarAbout,
  linkNavbarScore,
  linkNavbarSettings,
  logoLink,
} from '../header/header';
import { stopGame } from '../stop/stop-game';
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

function deleteClassNameAtLink() {
  navbarLinks.forEach((link) => {
    link.className = 'navbar-link';
  });
}

function callFnStopGame() {
  if (!btnStopGame.classList.contains('hidden')) {
    stopGame();
  }
}

function goHome() {
  deleteClassNameAtLink();
  linkNavbarAbout.classList.add('active');
  onNavigate('/');
  callFnStopGame();
  return false;
}

function goScore() {
  deleteClassNameAtLink();
  linkNavbarScore.classList.add('active');
  onNavigate('/score');
  callFnStopGame();
  return false;
}

btnStartGame.onclick = () => {
  deleteClassNameAtLink();
  onNavigate('/game');
  return false;
};
btnStopGame.onclick = () => {
  goHome();
};
logoLink.onclick = () => {
  goHome();
};
linkNavbarAbout.onclick = () => {
  goHome();
};
btnFinal.onclick = () => {
  goScore();
};
linkNavbarScore.onclick = () => {
  goScore();
};
linkNavbarSettings.onclick = () => {
  deleteClassNameAtLink();
  linkNavbarSettings.classList.add('active');
  onNavigate('/settings');
  callFnStopGame();
  return false;
};

window.onpopstate = () => {
  if (root) root.innerHTML = routes[window.location.pathname];
};
