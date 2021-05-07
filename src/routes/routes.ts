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
};

const ulNavbar = document.createElement('ul');
ulNavbar.className = 'navbar-list';
document.body.append(ulNavbar);

const liNavbarAbout = document.createElement('li');
liNavbarAbout.className = 'navbar-item';
liNavbarAbout.id = 'about';
ulNavbar.append(liNavbarAbout);

const liNavbarScore = document.createElement('li');
liNavbarScore.className = 'navbar-item';
liNavbarScore.id = 'score';
ulNavbar.append(liNavbarScore);

const liNavbarSettings = document.createElement('li');
liNavbarSettings.className = 'navbar-item';
liNavbarSettings.id = 'settings';
ulNavbar.append(liNavbarSettings);

const linkNavbarAbout = document.createElement('a');
linkNavbarAbout.href = '#';
linkNavbarAbout.innerHTML = `About`;
liNavbarAbout.append(linkNavbarAbout);

const linkNavbarScore = document.createElement('a');
linkNavbarScore.href = '#';
linkNavbarScore.innerHTML = `Score`;
liNavbarScore.append(linkNavbarScore);

const linkNavbarSettings = document.createElement('a');
linkNavbarSettings.href = '#';
linkNavbarSettings.innerHTML = `Settings`;
liNavbarSettings.append(linkNavbarSettings);

const root = document.createElement('div');
root.id = 'root';
document.body.append(root);
root.innerHTML = routes[window.location.pathname];

const onNavigate = (pathname: string) => {
  window.history.pushState({}, pathname, window.location.origin + pathname);
  root.innerHTML = routes[pathname];
};

linkNavbarAbout.onclick = () => {
  onNavigate('/');
  return false;
};
linkNavbarScore.onclick = () => {
  onNavigate('/score');
  return false;
};
linkNavbarSettings.onclick = () => {
  onNavigate('/settings');
  return false;
};

window.onpopstate = () => {
  root.innerHTML = routes[window.location.pathname];
};
