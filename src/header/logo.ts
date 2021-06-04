import { Tags } from '../utils/enum';
import { divHeaderLeft } from './divs';

const divLogo = document.createElement(Tags.Div);
divLogo.className = 'logo';
divHeaderLeft.append(divLogo);

export const logoLink = document.createElement(Tags.Link);
logoLink.href = '#';
logoLink.className = 'logo-link';
divLogo.append(logoLink);

const spanLogoTop = document.createElement(Tags.Span);
spanLogoTop.className = 'logo-top';
spanLogoTop.innerHTML = `match`;
logoLink.append(spanLogoTop);

const spanLogoBottom = document.createElement(Tags.Span);
spanLogoBottom.className = 'logo-bottom';
spanLogoBottom.innerHTML = `match`;
logoLink.append(spanLogoBottom);
