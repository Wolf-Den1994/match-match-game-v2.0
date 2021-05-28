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

function isValidateUser(): boolean {
  if (userNameIsValid && userSurnameIsValid && userEmailIsValid) {
    return true;
  }
  return false;
}

function isValidate(): void {
  if (isValidateUser()) {
    btnFormSubmit.classList.remove('invalid');
    btnFormSubmit.disabled = false;
  } else {
    btnFormSubmit.classList.add('invalid');
    btnFormSubmit.disabled = true;
  }
}

function showIconCheck(id: number): void {
  objElemsReg.ArrayImagesCheck.forEach((image) => {
    const idImage: number = toNumber(image.id.slice(-1));
    if (idImage === id) {
      image.classList.remove('check-hidden');
    }
  });
  objElemsReg.ArrayDivItemInputs.forEach((div) => {
    const idDiv: number = toNumber(div.id.slice(-1));
    if (idDiv === id) {
      div.classList.remove('warning');
    }
  });
}

function hideIconCheck(id: number): void {
  objElemsReg.ArrayImagesCheck.forEach((image) => {
    const idImage: number = toNumber(image.id.slice(-1));
    if (idImage === id) {
      image.classList.add('check-hidden');
    }
  });
  objElemsReg.ArrayDivItemInputs.forEach((div) => {
    const idDiv: number = toNumber(div.id.slice(-1));
    if (idDiv === id) {
      div.classList.add('warning');
    }
  });
}

function isValidateName(): void {
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

function isValidateSurname(): void {
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

function isValidateEmail(): void {
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

function resetInput(): void {
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

if (btnFormCancel) {
  btnFormCancel.addEventListener('click', resetInput);
}
