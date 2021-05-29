import { btnStartGame, btnStopGame } from '../handler/register';
import { btnFormSubmit } from '../handler/register-html';
import { handlerUserRegistration } from '../handler/submit-input';
import { checkClass } from '../utils/check-class';
import { createField } from './field-time';

function toRunStartGame(): void {
  if (checkClass(btnStopGame, 'hidden')) {
    btnStartGame.classList.add('hidden');
    btnStopGame.classList.remove('hidden');

    createField();
  }
  btnFormSubmit.removeEventListener('click', handlerUserRegistration);
}

btnStartGame.addEventListener('click', toRunStartGame);
