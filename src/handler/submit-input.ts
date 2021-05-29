import { checkClass } from '../utils/check-class';
import { getObjElemsRegister } from '../utils/reg-utils';
import {
  isValidateEmail,
  isValidateName,
  isValidateSurname,
  resetInput,
} from './check-input';
import { btnRegister, btnStartGame, closeModalRegister } from './register';
import { btnFormCancel, btnFormSubmit, modal } from './register-html';

const objElemsReg = getObjElemsRegister();

export function handlerUserRegistration(): void {
  if (checkClass(modal, 'open-modal')) {
    closeModalRegister();
    if (checkClass(btnStartGame, 'hidden')) {
      btnRegister.classList.add('hidden');
      btnStartGame.classList.remove('hidden');
    }
  }
  objElemsReg.userName.removeEventListener('input', () => {
    isValidateName();
  });
  objElemsReg.userLastname.removeEventListener('input', () => {
    isValidateSurname();
  });
  objElemsReg.userEmail.removeEventListener('input', () => {
    isValidateEmail();
  });
  btnFormCancel.removeEventListener('click', resetInput);
}

btnFormSubmit.addEventListener('click', handlerUserRegistration);
