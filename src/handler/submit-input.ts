import { btnRegister, btnStartGame, closeModalRegister } from './register';
import { btnFormSubmit, modal } from './register-html';

function handlerUserRegistration(): void {
  if (modal.classList.contains('open-modal')) {
    closeModalRegister();
    if (btnStartGame.classList.contains('hidden')) {
      btnRegister.classList.add('hidden');
      btnStartGame.classList.remove('hidden');
    }
  }
}

btnFormSubmit.addEventListener('click', handlerUserRegistration);
