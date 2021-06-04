import { Tags } from '../utils/enum';
import { divHeaderRight } from './divs';

export const divAvatar = document.createElement(Tags.Div);
divAvatar.className = 'header-avatar hide';
divHeaderRight.append(divAvatar);
