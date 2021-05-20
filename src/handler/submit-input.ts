import { btnRegister, btnStartGame } from './register';
import { btnFormSubmit, modal, overlay } from './register-html';

function handlerUserRegistration(): void {
  if (!modal) throw new Error('modal is not found');
  if (!overlay) throw new Error('overlay is not found');
  if (!btnRegister) throw new Error('Button Register is not found');
  if (!btnStartGame) throw new Error('Button Start Game is not found');

  if (modal.classList.contains('open-modal')) {
    modal.classList.remove('open-modal');
    overlay.classList.remove('open-modal');
    document.body.classList.remove('lock');
    if (btnStartGame.classList.contains('hidden')) {
      btnRegister.classList.add('hidden');
      btnStartGame.classList.remove('hidden');
    }
  }
}

btnFormSubmit.addEventListener('click', handlerUserRegistration);
