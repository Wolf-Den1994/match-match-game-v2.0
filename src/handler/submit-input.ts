import { checkClass } from '../utils/check-class';
import { HIDDEN, OPEN_MODAL } from '../utils/consts';
import { getObjElemsRegister } from '../utils/reg-utils';
import { updateClassList } from '../utils/update-class';
import {
  isValidateEmail,
  isValidateName,
  isValidateSurname,
  resetInput,
} from './check-input';
import { btnRegister, btnStartGame, closeModalRegister } from './register';
import { btnFormCancel, btnFormSubmit, modal } from './register-html';

const objElemsReg = getObjElemsRegister();

export const handlerUserRegistration = function handlerUserRegistr(): void {
  if (checkClass(modal, OPEN_MODAL)) {
    closeModalRegister();
    if (checkClass(btnStartGame, HIDDEN)) {
      updateClassList(btnRegister, btnStartGame, HIDDEN);
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
};

btnFormSubmit.addEventListener('click', handlerUserRegistration);
