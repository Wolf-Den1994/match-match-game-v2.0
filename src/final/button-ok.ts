import { overlay } from '../handler/register-html';
import { checkClass } from '../utils/check-class';
import { btnFinal, modalCongratulate } from './final-html';

function hideModalFinal(): void {
  if (checkClass(modalCongratulate, 'open-modal')) {
    modalCongratulate.classList.remove('open-modal');
    overlay.classList.remove('open-modal');
  }
}

btnFinal.addEventListener('click', hideModalFinal);
