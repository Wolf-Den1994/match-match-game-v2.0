import { isValidEmail, isValidName, isValidSurname } from '../shared/isValid';
import { btnFormCancel, btnFormSubmit } from './register-html';

const userName = <HTMLElement>document.getElementById('user-name');
const userLastname = <HTMLElement>document.getElementById('user-lastname');
const userEmail = <HTMLElement>document.getElementById('user-email');
const imagesCheck: NodeListOf<HTMLElement> = document.querySelectorAll(
  '.img-check-register',
);
const ArrayImagesCheck: HTMLElement[] = Array.from(imagesCheck);
const divItemInputs: NodeListOf<HTMLElement> = document.querySelectorAll(
  '.form-item-register',
);
const ArrayDivItemInputs: HTMLElement[] = Array.from(divItemInputs);
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
  if (!isInputElement(userName)) return;
  if (
    userName.validity.valid &&
    isValidName(userName.value) &&
    Number.isNaN(+userName.value)
  ) {
    userNameIsValid = true;
    showIconCheck(1);
  } else {
    userNameIsValid = false;
    hideIconCheck(1);
  }
  isValidate();
}

function isValidateSurname(): void {
  if (!isInputElement(userLastname)) return;
  if (
    userLastname.validity.valid &&
    isValidSurname(userLastname.value) &&
    Number.isNaN(+userLastname.value)
  ) {
    userSurnameIsValid = true;
    showIconCheck(2);
  } else {
    userSurnameIsValid = false;
    hideIconCheck(2);
  }
  isValidate();
}

function isValidateEmail(): void {
  if (!isInputElement(userEmail)) return;
  if (
    userEmail.validity.valid &&
    isValidEmail(userEmail.value) &&
    userEmail.value.length <= 30
  ) {
    userEmailIsValid = true;
    showIconCheck(3);
  } else {
    userEmailIsValid = false;
    hideIconCheck(3);
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

function resetInput() {
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
