import { isValidEmail, isValidName, isValidSurname } from '../shared/isValid';
import {
  ArrayDivItemInputs,
  ArrayImagesCheck,
  btnFormCancel,
  btnFormSubmit,
  userEmail,
  userLastname,
  userName,
} from './register-html';

const MAX_LENGTH_EMAIL = 30;
let userNameIsValid = false;
let userSurnameIsValid = false;
let userEmailIsValid = false;

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
  ArrayImagesCheck.forEach((image) => {
    const idImage: number = +image.id.slice(-1);
    if (idImage === id) {
      image.classList.remove('check-hidden');
    }
  });
  ArrayDivItemInputs.forEach((div) => {
    const idDiv: number = +div.id.slice(-1);
    if (idDiv === id) {
      div.classList.remove('warning');
    }
  });
}

function hideIconCheck(id: number): void {
  ArrayImagesCheck.forEach((image) => {
    const idImage: number = +image.id.slice(-1);
    if (idImage === id) {
      image.classList.add('check-hidden');
    }
  });
  ArrayDivItemInputs.forEach((div) => {
    const idDiv: number = +div.id.slice(-1);
    if (idDiv === id) {
      div.classList.add('warning');
    }
  });
}

function isValidateName(): void {
  const VALID_NAME = 1;
  if (!isInputElement(userName)) return;
  if (
    userName.validity.valid &&
    isValidName(userName.value) &&
    Number.isNaN(+userName.value)
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
  if (!isInputElement(userLastname)) return;
  if (
    userLastname.validity.valid &&
    isValidSurname(userLastname.value) &&
    Number.isNaN(+userLastname.value)
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
  if (!isInputElement(userEmail)) return;
  if (
    userEmail.validity.valid &&
    isValidEmail(userEmail.value) &&
    userEmail.value.length <= MAX_LENGTH_EMAIL
  ) {
    userEmailIsValid = true;
    showIconCheck(VALID_EMAIL);
  } else {
    userEmailIsValid = false;
    hideIconCheck(VALID_EMAIL);
  }
  isValidate();
}

userName.addEventListener('input', () => {
  isValidateName();
});

userLastname.addEventListener('input', () => {
  isValidateSurname();
});

userEmail.addEventListener('input', () => {
  isValidateEmail();
});

function resetInput(): void {
  if (isInputElement(userName)) {
    userName.value = '';
  }
  if (isInputElement(userLastname)) {
    userLastname.value = '';
  }
  if (isInputElement(userEmail)) {
    userEmail.value = '';
  }
  ArrayImagesCheck.forEach((image) => {
    image.classList.add('check-hidden');
  });
  userNameIsValid = false;
  userSurnameIsValid = false;
  userEmailIsValid = false;
  btnFormSubmit.classList.add('invalid');
  btnFormSubmit.disabled = true;
  ArrayDivItemInputs.forEach((div) => {
    div.classList.remove('warning');
  });
}

if (btnFormCancel) {
  btnFormCancel.addEventListener('click', resetInput);
}
