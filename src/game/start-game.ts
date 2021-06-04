import { btnStartGame, btnStopGame } from '../handler/register';
import { btnFormSubmit } from '../handler/register-html';
import { handlerUserRegistration } from '../handler/submit-input';
import { checkClass } from '../utils/check-class';
import { ElemClasses } from '../utils/enum';
import { updateClassList } from '../utils/update-class';
import { createField } from './field-time';

const toRunStartGame = function runStartGame(): void {
  if (checkClass(btnStopGame, ElemClasses.HIDDEN)) {
    updateClassList(btnStartGame, btnStopGame, ElemClasses.HIDDEN);

    createField();
  }
  btnFormSubmit.removeEventListener('click', handlerUserRegistration);
};

btnStartGame.addEventListener('click', toRunStartGame);
