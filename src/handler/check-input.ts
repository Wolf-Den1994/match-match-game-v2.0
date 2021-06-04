import {
  checkingConditionValidEmail,
  checkingConditionValidName,
  checkingConditionValidSurname,
} from '../shared/checkig-user';
import { addClassList } from '../utils/add-class';
import { ElemClasses } from '../utils/enum';
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

const isValidate = function validate(): void {
  if (checkUser()) {
    removeClassList(btnFormSubmit, ElemClasses.Invalid);
    btnFormSubmit.disabled = false;
  } else {
    addClassList(btnFormSubmit, ElemClasses.Invalid);
    btnFormSubmit.disabled = true;
  }
};

const changeOfState = function changeState(
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
};

const showIconCheck = function showIcon(id: number): void {
  changeOfState(
    objElemsReg.ArrayImagesCheck,
    id,
    ElemClasses.CheckHidden,
    true,
  );
  changeOfState(objElemsReg.ArrayDivItemInputs, id, ElemClasses.Warning, true);
  changeOfState(objElemsReg.ArraypErrors, id, ElemClasses.CheckHidden, false);
};

const hideIconCheck = function hideIcon(id: number): void {
  changeOfState(
    objElemsReg.ArrayImagesCheck,
    id,
    ElemClasses.CheckHidden,
    false,
  );
  changeOfState(objElemsReg.ArrayDivItemInputs, id, ElemClasses.Warning, false);
  changeOfState(objElemsReg.ArraypErrors, id, ElemClasses.CheckHidden, true);
};

export const isValidateName = function validateName(): void {
  const VALID_NAME = 1;
  if (checkingConditionValidName()) {
    userNameIsValid = true;
    showIconCheck(VALID_NAME);
  } else {
    userNameIsValid = false;
    hideIconCheck(VALID_NAME);
  }
  isValidate();
};

export const isValidateSurname = function validateSurname(): void {
  const VALID_SURNAME = 2;
  if (checkingConditionValidSurname()) {
    userSurnameIsValid = true;
    showIconCheck(VALID_SURNAME);
  } else {
    userSurnameIsValid = false;
    hideIconCheck(VALID_SURNAME);
  }
  isValidate();
};

export const isValidateEmail = function validateEmail(): void {
  const VALID_EMAIL = 3;
  if (checkingConditionValidEmail()) {
    userEmailIsValid = true;
    showIconCheck(VALID_EMAIL);
  } else {
    userEmailIsValid = false;
    hideIconCheck(VALID_EMAIL);
  }
  isValidate();
};

objElemsReg.userName.addEventListener('input', () => {
  isValidateName();
});

objElemsReg.userLastname.addEventListener('input', () => {
  isValidateSurname();
});

objElemsReg.userEmail.addEventListener('input', () => {
  isValidateEmail();
});

export const resetInput = function resetAllInputs(): void {
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
    addClassList(image, ElemClasses.CheckHidden);
  });
  userNameIsValid = false;
  userSurnameIsValid = false;
  userEmailIsValid = false;
  addClassList(btnFormSubmit, ElemClasses.Invalid);
  btnFormSubmit.disabled = true;
  objElemsReg.ArrayDivItemInputs.forEach((div) => {
    removeClassList(div, ElemClasses.Warning);
  });
};

btnFormCancel.addEventListener('click', resetInput);
