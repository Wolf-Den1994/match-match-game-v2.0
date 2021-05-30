import { overlay } from '../handler/register-html';
import { checkClass } from '../utils/check-class';
import { OPEN_MODAL } from '../utils/consts';
import { removeClassList } from '../utils/remove-class';
import { btnFinal, modalCongratulate } from './final-html';

const hideModFinal = function hideModalFinal(): void {
  if (checkClass(modalCongratulate, OPEN_MODAL)) {
    removeClassList(modalCongratulate, OPEN_MODAL);
    removeClassList(overlay, OPEN_MODAL);
  }
};

btnFinal.addEventListener('click', hideModFinal);
