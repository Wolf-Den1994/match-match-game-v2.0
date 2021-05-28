import { isValidEmail, isValidName, isValidSurname } from '../shared/isValid';
import { getObjElemsRegister } from '../utils/reg-utils';
import { btnFormCancel, btnFormSubmit } from './register-html';

const MAX_LENGTH_EMAIL = 30;
let userNameIsValid = false;
let userSurnameIsValid = false;
let userEmailIsValid = false;

const objElemsReg = getObjElemsRegister();

function isValidate(): void {
  if (!btnFormSubmit) throw new Error('Button submit is not found');
  if (userNameIsValid && userSurnameIsValid && userEmailIsValid) {
    btnFormSubmit.classList.remove('invalid');
    btnFormSubmit.disabled = false;
  } else {
    btnFormSubmit.classList.add('invalid');
    btnFormSubmit.disabled = true;
  }
}

function isInputElement(elem: HTMLElement | null): elem is HTMLInputElement {
  if (!elem) throw new Error('Element is not found');
  return elem.tagName === 'INPUT';
}

function showIconCheck(id: number): void {
  objElemsReg.ArrayImagesCheck.forEach((image) => {
    const idImage: number = +image.id.slice(-1);
    if (idImage === id) {
      image.classList.remove('check-hidden');
    }
  });
  objElemsReg.ArrayDivItemInputs.forEach((div) => {
    const idDiv: number = +div.id.slice(-1);
    if (idDiv === id) {
      div.classList.remove('warning');
    }
  });
}

function hideIconCheck(id: number): void {
  objElemsReg.ArrayImagesCheck.forEach((image) => {
    const idImage: number = +image.id.slice(-1);
    if (idImage === id) {
      image.classList.add('check-hidden');
    }
  });
  objElemsReg.ArrayDivItemInputs.forEach((div) => {
    const idDiv: number = +div.id.slice(-1);
    if (idDiv === id) {
      div.classList.add('warning');
    }
  });
}

function isValidateName(): void {
  const VALID_NAME = 1;
  if (!isInputElement(objElemsReg.userName)) return;
  if (
    objElemsReg.userName.validity.valid &&
    isValidName(objElemsReg.userName.value) &&
    Number.isNaN(+objElemsReg.userName.value)
  ) {
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
  if (!isInputElement(objElemsReg.userLastname)) return;
  if (
    objElemsReg.userLastname.validity.valid &&
    isValidSurname(objElemsReg.userLastname.value) &&
    Number.isNaN(+objElemsReg.userLastname.value)
  ) {
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
  if (!isInputElement(objElemsReg.userEmail)) return;
  if (
    objElemsReg.userEmail.validity.valid &&
    isValidEmail(objElemsReg.userEmail.value) &&
    objElemsReg.userEmail.value.length <= MAX_LENGTH_EMAIL
  ) {
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
