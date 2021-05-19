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

export const btnStartGame = document.createElement('button');
btnStartGame.className = 'btn-start-game hidden';
btnStartGame.innerHTML = `start game`;
header.append(btnStartGame);

export const btnStopGame = document.createElement('button');
btnStopGame.className = 'btn-stop-game hidden';
btnStopGame.innerHTML = `stop game`;
header.append(btnStopGame);

const divLogo = document.createElement('div');
divLogo.className = 'logo';
divHeaderLeft.append(divLogo);

export const logoLink = document.createElement('a');
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

const liNavbarSettings = document.createElement('li');
liNavbarSettings.className = 'navbar-item';
ulNavbar.append(liNavbarSettings);

export const linkNavbarSettings = document.createElement('a');
linkNavbarSettings.href = '#';
linkNavbarSettings.className = `navbar-link`;
linkNavbarSettings.id = 'settings';
liNavbarSettings.append(linkNavbarSettings);

const svgLinkSettings = document.createElement('svg');
linkNavbarSettings.append(svgLinkSettings);

const paragraphSettings = document.createElement('p');
paragraphSettings.innerHTML = 'Game Settings';
linkNavbarSettings.append(paragraphSettings);
