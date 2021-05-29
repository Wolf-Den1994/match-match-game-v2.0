import { btnFinal } from '../final/final-html';
import { gameField } from '../game/field-time';
import { objWithSetting } from '../game/obj-setting';
import { renderField } from '../game/render-field';
import { btnStartGame, btnStopGame } from '../header/buttons';
import { logoLink } from '../header/logo';
import { linkNavbarAbout } from '../header/navbar-about';
import { linkNavbarScore } from '../header/navbar-score';
import { linkNavbarSettings } from '../header/navbar-settings';
import { stopGame } from '../stop/stop-game';
import { addClassList } from '../utils/add-class';
import { checkClass } from '../utils/check-class';
import { ACTIVE, HIDDEN } from '../utils/consts';
import { toNumber } from '../utils/toNumber';
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

root.innerHTML = routes[window.location.pathname];
addClassList(linkNavbarAbout, ACTIVE);

export function pollOfElections(): void {
  const selectCard = document.querySelector('#select-card');
  const selectDifficulty = document.querySelector('#select-difficulty');
  if (selectCard instanceof HTMLSelectElement) {
    objWithSetting.card = selectCard.value;
  }
  if (selectDifficulty instanceof HTMLSelectElement) {
    objWithSetting.difficulty = toNumber(selectDifficulty.value);
  }
  setTimeout(pollOfElections, 500);
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

function deleteClassNameAtLink(): void {
  navbarLinks.forEach((link) => {
    link.className = 'navbar-link';
  });
}

function callFnStopGame(): void {
  if (!checkClass(btnStopGame, HIDDEN)) {
    stopGame();
  }
}

function goHome(): boolean {
  deleteClassNameAtLink();
  addClassList(linkNavbarAbout, ACTIVE);
  onNavigate('/');
  callFnStopGame();
  return false;
}

function goScore(): boolean {
  deleteClassNameAtLink();
  addClassList(linkNavbarScore, ACTIVE);
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
  addClassList(linkNavbarSettings, ACTIVE);
  onNavigate('/settings');
  callFnStopGame();
  return false;
};

window.onpopstate = () => {
  root.innerHTML = routes[window.location.pathname];
};
