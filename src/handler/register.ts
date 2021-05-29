import { indexedDBcall } from '../indexeddb/indexeddb';
import { checkClass } from '../utils/check-class';
import { LOCK, OPEN_MODAL } from '../utils/consts';
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

export function openModalRegister(): void {
  modal.classList.add(OPEN_MODAL);
  overlay.classList.add(OPEN_MODAL);
  document.body.classList.add(LOCK);
}

export function closeModalRegister(): void {
  modal.classList.remove(OPEN_MODAL);
  overlay.classList.remove(OPEN_MODAL);
  document.body.classList.remove(LOCK);
}

window.onload = () => {
  function checkOpenModalRegister(): void {
    if (!checkClass(modal, OPEN_MODAL)) {
      openModalRegister();
    }
  }

  function checkCloseModalRegister(): void {
    if (checkClass(modal, OPEN_MODAL)) {
      closeModalRegister();
    }
  }

  btnRegister.addEventListener('click', checkOpenModalRegister);
  overlay.addEventListener('click', checkCloseModalRegister);

  indexedDBcall();

  function removeListener(): void {
    btnRegister.removeEventListener('click', checkOpenModalRegister);
    overlay.removeEventListener('click', checkCloseModalRegister);
  }

  btnFormSubmit.addEventListener('click', removeListener);
};
