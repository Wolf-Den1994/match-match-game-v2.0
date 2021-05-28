import { btnRegister, btnStartGame } from './register';
import { btnFormSubmit, modal, overlay } from './register-html';

function handlerUserRegistration(): void {
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
