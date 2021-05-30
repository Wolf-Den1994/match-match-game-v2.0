import { indexedDBcall } from '../indexeddb/indexeddb';
import { addClassList } from '../utils/add-class';
import { checkClass } from '../utils/check-class';
import { LOCK, OPEN_MODAL } from '../utils/consts';
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
  addClassList(modal, OPEN_MODAL);
  addClassList(overlay, OPEN_MODAL);
  addClassList(document.body, LOCK);
};

export const closeModalRegister = function closeModalReg(): void {
  removeClassList(modal, OPEN_MODAL);
  removeClassList(overlay, OPEN_MODAL);
  removeClassList(document.body, LOCK);
};

window.onload = () => {
  const checkOpenModalRegister = function checkOpenModalReg(): void {
    if (!checkClass(modal, OPEN_MODAL)) {
      openModalRegister();
    }
  };

  const checkCloseModalRegister = function checkCloseModalReg(): void {
    if (checkClass(modal, OPEN_MODAL)) {
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
