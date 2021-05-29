import {
  checkingConditionValidEmail,
  checkingConditionValidName,
  checkingConditionValidSurname,
} from '../shared/checkig-user';
import { isInputElement } from '../utils/errors';
import { getObjElemsRegister } from '../utils/reg-utils';
import { toNumber } from '../utils/toNumber';
import { btnFormCancel, btnFormSubmit } from './register-html';

let userNameIsValid = false;
let userSurnameIsValid = false;
let userEmailIsValid = false;

const objElemsReg = getObjElemsRegister();

const checkUser = function isValidateUser(): boolean {
  if (userNameIsValid && userSurnameIsValid && userEmailIsValid) {
    return true;
  }
  return false;
};

function isValidate(): void {
  if (checkUser()) {
    btnFormSubmit.classList.remove('invalid');
    btnFormSubmit.disabled = false;
  } else {
    btnFormSubmit.classList.add('invalid');
    btnFormSubmit.disabled = true;
  }
}

function changeOfState(
  arr: HTMLElement[],
  id: number,
  className: string,
  isRemove: boolean,
): void {
  arr.forEach((elem) => {
    const idImage: number = toNumber(elem.id.slice(-1));
    if (idImage === id) {
      if (isRemove) {
        elem.classList.remove(className);
      } else {
        elem.classList.add(className);
      }
    }
  });
}

function showIconCheck(id: number): void {
  changeOfState(objElemsReg.ArrayImagesCheck, id, 'check-hidden', true);
  changeOfState(objElemsReg.ArrayDivItemInputs, id, 'warning', true);
  changeOfState(objElemsReg.ArraypErrors, id, 'check-hidden', false);
}

function hideIconCheck(id: number): void {
  changeOfState(objElemsReg.ArrayImagesCheck, id, 'check-hidden', false);
  changeOfState(objElemsReg.ArrayDivItemInputs, id, 'warning', false);
  changeOfState(objElemsReg.ArraypErrors, id, 'check-hidden', true);
}

export function isValidateName(): void {
  const VALID_NAME = 1;
  if (checkingConditionValidName()) {
    userNameIsValid = true;
    showIconCheck(VALID_NAME);
  } else {
    userNameIsValid = false;
    hideIconCheck(VALID_NAME);
  }
  isValidate();
}

export function isValidateSurname(): void {
  const VALID_SURNAME = 2;
  if (checkingConditionValidSurname()) {
    userSurnameIsValid = true;
    showIconCheck(VALID_SURNAME);
  } else {
    userSurnameIsValid = false;
    hideIconCheck(VALID_SURNAME);
  }
  isValidate();
}

export function isValidateEmail(): void {
  const VALID_EMAIL = 3;
  if (checkingConditionValidEmail()) {
    userEmailIsValid = true;
    showIconCheck(VALID_EMAIL);
  } else {
    userEmailIsValid = false;
    hideIconCheck(VALID_EMAIL);
  }
  isValidate();
}

objElemsReg.userName.addEventListener('input', () => {
  isValidateName();
});

objElemsReg.userLastname.addEventListener('input', () => {
  isValidateSurname();
});

objElemsReg.userEmail.addEventListener('input', () => {
  isValidateEmail();
});

export function resetInput(): void {
  if (isInputElement(objElemsReg.userName)) {
    objElemsReg.userName.value = '';
  }
  if (isInputElement(objElemsReg.userLastname)) {
    objElemsReg.userLastname.value = '';
  }
  if (isInputElement(objElemsReg.userEmail)) {
    objElemsReg.userEmail.value = '';
  }
  objElemsReg.ArrayImagesCheck.forEach((image) => {
    image.classList.add('check-hidden');
  });
  userNameIsValid = false;
  userSurnameIsValid = false;
  userEmailIsValid = false;
  btnFormSubmit.classList.add('invalid');
  btnFormSubmit.disabled = true;
  objElemsReg.ArrayDivItemInputs.forEach((div) => {
    div.classList.remove('warning');
  });
}

btnFormCancel.addEventListener('click', resetInput);
