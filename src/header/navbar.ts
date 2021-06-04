import { Tags } from '../utils/enum';
import { divHeaderLeft } from './divs';

export const ulNavbar = document.createElement(Tags.UlList);
ulNavbar.className = 'navbar-list';
divHeaderLeft.append(ulNavbar);
