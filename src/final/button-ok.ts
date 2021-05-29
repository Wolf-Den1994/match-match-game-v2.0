import { overlay } from '../handler/register-html';
import { checkClass } from '../utils/check-class';
import { OPEN_MODAL } from '../utils/consts';
import { btnFinal, modalCongratulate } from './final-html';

function hideModalFinal(): void {
  if (checkClass(modalCongratulate, OPEN_MODAL)) {
    modalCongratulate.classList.remove(OPEN_MODAL);
    overlay.classList.remove(OPEN_MODAL);
  }
}

btnFinal.addEventListener('click', hideModalFinal);
