import { overlay } from '../handler/register-html';
import { btnFinal, modalCongratulate } from './final-html';

function hideModalFinal(): void {
  if (modalCongratulate.classList.contains('open-modal')) {
    modalCongratulate.classList.remove('open-modal');
    overlay.classList.remove('open-modal');
  }
}

btnFinal.addEventListener('click', hideModalFinal);
