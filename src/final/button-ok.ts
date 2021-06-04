import { overlay } from '../handler/register-html';
import { checkClass } from '../utils/check-class';
import { ElemClasses } from '../utils/enum';
import { removeClassList } from '../utils/remove-class';
import { btnFinal, modalCongratulate } from './final-html';

const hideModFinal = function hideModalFinal(): void {
  if (checkClass(modalCongratulate, ElemClasses.OPEN_MODAL)) {
    removeClassList(modalCongratulate, ElemClasses.OPEN_MODAL);
    removeClassList(overlay, ElemClasses.OPEN_MODAL);
  }
};

btnFinal.addEventListener('click', hideModFinal);
