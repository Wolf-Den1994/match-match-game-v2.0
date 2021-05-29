import { header } from './header';

export const divHeaderLeft = document.createElement('div');
divHeaderLeft.className = 'header-left';
header.append(divHeaderLeft);

export const divHeaderRight = document.createElement('div');
divHeaderRight.className = 'header-right';
header.append(divHeaderRight);
