import { btnStartGame, btnStopGame } from '../handler/register';
import { btnFormSubmit } from '../handler/register-html';
import { handlerUserRegistration } from '../handler/submit-input';
import { checkClass } from '../utils/check-class';
import { HIDDEN } from '../utils/consts';
import { updateClassList } from '../utils/update-class';
import { createField } from './field-time';

const toRunStartGame = function runStartGame(): void {
  if (checkClass(btnStopGame, HIDDEN)) {
    updateClassList(btnStartGame, btnStopGame, HIDDEN);

    createField();
  }
  btnFormSubmit.removeEventListener('click', handlerUserRegistration);
};

btnStartGame.addEventListener('click', toRunStartGame);
