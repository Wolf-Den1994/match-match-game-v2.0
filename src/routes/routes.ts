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

const linkNavbarAbout = document.getElementById('about');
const linkNavbarScore = document.getElementById('score');
const linkNavbarSettings = document.getElementById('settings');
const root = document.getElementById('root');
const navbarLinks = document.querySelectorAll('.navbar-link');

if (root) root.innerHTML = routes[window.location.pathname];
if (linkNavbarAbout) linkNavbarAbout.classList.add('active');

const onNavigate = (pathname: string) => {
  window.history.pushState({}, pathname, window.location.origin + pathname);
  if (root) root.innerHTML = routes[pathname];
};

if (linkNavbarAbout)
  linkNavbarAbout.onclick = () => {
    navbarLinks.forEach((link) => {
      link.className = 'navbar-link';
    });
    linkNavbarAbout.classList.add('active');
    onNavigate('/');
    return false;
  };
if (linkNavbarScore)
  linkNavbarScore.onclick = () => {
    navbarLinks.forEach((link) => {
      link.className = 'navbar-link';
    });
    linkNavbarScore.classList.add('active');
    onNavigate('/score');
    return false;
  };
if (linkNavbarSettings)
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
