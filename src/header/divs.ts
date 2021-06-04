import { Tags } from '../utils/enum';
import { header } from './header';

export const divHeaderLeft = document.createElement(Tags.Div);
divHeaderLeft.className = 'header-left';
header.append(divHeaderLeft);

export const divHeaderRight = document.createElement(Tags.Div);
divHeaderRight.className = 'header-right';
header.append(divHeaderRight);
