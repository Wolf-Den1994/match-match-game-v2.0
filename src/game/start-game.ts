import { btnStartGame, btnStopGame } from '../handler/register';
import { btnFormSubmit } from '../handler/register-html';
import { handlerUserRegistration } from '../handler/submit-input';
import { checkClass } from '../utils/check-class';
import { HIDDEN } from '../utils/consts';
import { createField } from './field-time';

function toRunStartGame(): void {
  if (checkClass(btnStopGame, HIDDEN)) {
    btnStartGame.classList.add(HIDDEN);
    btnStopGame.classList.remove(HIDDEN);

    createField();
  }
  btnFormSubmit.removeEventListener('click', handlerUserRegistration);
}

btnStartGame.addEventListener('click', toRunStartGame);
