import {
  checkingConditionValidEmail,
  checkingConditionValidName,
  checkingConditionValidSurname,
} from '../shared/checkig-user';
import { addClassList } from '../utils/add-class';
import { CHECK_HIDDEN, INVALID, WARNING } from '../utils/consts';
import { isInputElement } from '../utils/errors';
import { getObjElemsRegister } from '../utils/reg-utils';
import { removeClassList } from '../utils/remove-class';
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
    removeClassList(btnFormSubmit, INVALID);
    btnFormSubmit.disabled = false;
  } else {
    addClassList(btnFormSubmit, INVALID);
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
        removeClassList(elem, className);
      } else {
        addClassList(elem, className);
      }
    }
  });
}

function showIconCheck(id: number): void {
  changeOfState(objElemsReg.ArrayImagesCheck, id, CHECK_HIDDEN, true);
  changeOfState(objElemsReg.ArrayDivItemInputs, id, WARNING, true);
  changeOfState(objElemsReg.ArraypErrors, id, CHECK_HIDDEN, false);
}

function hideIconCheck(id: number): void {
  changeOfState(objElemsReg.ArrayImagesCheck, id, CHECK_HIDDEN, false);
  changeOfState(objElemsReg.ArrayDivItemInputs, id, WARNING, false);
  changeOfState(objElemsReg.ArraypErrors, id, CHECK_HIDDEN, true);
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
    addClassList(image, CHECK_HIDDEN);
  });
  userNameIsValid = false;
  userSurnameIsValid = false;
  userEmailIsValid = false;
  addClassList(btnFormSubmit, INVALID);
  btnFormSubmit.disabled = true;
  objElemsReg.ArrayDivItemInputs.forEach((div) => {
    removeClassList(div, WARNING);
  });
}

btnFormCancel.addEventListener('click', resetInput);
