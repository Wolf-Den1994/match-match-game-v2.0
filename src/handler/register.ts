import { indexedDBcall } from '../indexeddb/indexeddb';
import { addClassList } from '../utils/add-class';
import { checkClass } from '../utils/check-class';
import { ElemClasses } from '../utils/enum';
import { removeClassList } from '../utils/remove-class';
import { btnFormSubmit, modal, overlay } from './register-html';

export const btnRegister = <HTMLButtonElement>(
  document.querySelector('.btn-register')
);
export const btnStartGame = <HTMLButtonElement>(
  document.querySelector('.btn-start-game')
);
export const btnStopGame = <HTMLButtonElement>(
  document.querySelector('.btn-stop-game')
);

export const openModalRegister = function openModalReg(): void {
  addClassList(modal, ElemClasses.OpenModal);
  addClassList(overlay, ElemClasses.OpenModal);
  addClassList(document.body, ElemClasses.Lock);
};

export const closeModalRegister = function closeModalReg(): void {
  removeClassList(modal, ElemClasses.OpenModal);
  removeClassList(overlay, ElemClasses.OpenModal);
  removeClassList(document.body, ElemClasses.Lock);
};

window.onload = () => {
  const checkOpenModalRegister = function checkOpenModalReg(): void {
    if (!checkClass(modal, ElemClasses.OpenModal)) {
      openModalRegister();
    }
  };

  const checkCloseModalRegister = function checkCloseModalReg(): void {
    if (checkClass(modal, ElemClasses.OpenModal)) {
      closeModalRegister();
    }
  };

  btnRegister.addEventListener('click', checkOpenModalRegister);
  overlay.addEventListener('click', checkCloseModalRegister);

  indexedDBcall();

  const removeListener = function removeListeners(): void {
    btnRegister.removeEventListener('click', checkOpenModalRegister);
    overlay.removeEventListener('click', checkCloseModalRegister);
  };

  btnFormSubmit.addEventListener('click', removeListener);
};
