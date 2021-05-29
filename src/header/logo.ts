import { divHeaderLeft } from './divs';

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
