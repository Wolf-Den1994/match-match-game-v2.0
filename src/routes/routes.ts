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
import { ElemClasses, Tags } from '../utils/enum';
import { toNumber } from '../utils/toNumber';
import { about } from './about';
import { score } from './score';
import { settings } from './settings';

const TIME_CALL_FN_POLLOFEL = 500;

interface IRoutes {
  [key: string]: string;
}

const routes: IRoutes = {
  '/': about,
  '/score': score,
  '/settings': settings,
  '/game': gameField,
};

export const root = document.createElement(Tags.Div);
root.id = 'root';
document.body.append(root);
root.innerHTML = routes[window.location.pathname];

const navbarLinks = document.querySelectorAll('.navbar-link');

root.innerHTML = routes[window.location.pathname];
addClassList(linkNavbarAbout, ElemClasses.Active);

export const pollOfElections = function pollElections(): void {
  const selectCard = document.querySelector('#select-card');
  const selectDifficulty = document.querySelector('#select-difficulty');
  if (selectCard instanceof HTMLSelectElement) {
    objWithSetting.card = selectCard.value;
  }
  if (selectDifficulty instanceof HTMLSelectElement) {
    objWithSetting.difficulty = toNumber(selectDifficulty.value);
  }
  setTimeout(pollOfElections, TIME_CALL_FN_POLLOFEL);
};

const onNavigate = (pathname: string) => {
  window.history.pushState({}, pathname, window.location.origin + pathname);
  if (root) root.innerHTML = routes[pathname];
  if (pathname === '/game') {
    const field = <HTMLElement>document.querySelector('.main-field');
    renderField(field);
  }
  pollOfElections();
};

const deleteClassNameAtLink = function deleteClassNameLink(): void {
  navbarLinks.forEach((link) => {
    link.className = 'navbar-link';
  });
};

const callFnStopGame = function callStopGame(): void {
  if (!checkClass(btnStopGame, ElemClasses.Hidden)) {
    stopGame();
  }
};

const goHome = function homePage(): boolean {
  deleteClassNameAtLink();
  addClassList(linkNavbarAbout, ElemClasses.Active);
  onNavigate('/');
  callFnStopGame();
  return false;
};

const goScore = function scorePage(): boolean {
  deleteClassNameAtLink();
  addClassList(linkNavbarScore, ElemClasses.Active);
  onNavigate('/score');
  callFnStopGame();
  return false;
};

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
  addClassList(linkNavbarSettings, ElemClasses.Active);
  onNavigate('/settings');
  callFnStopGame();
  return false;
};

window.onpopstate = () => {
  root.innerHTML = routes[window.location.pathname];
};
