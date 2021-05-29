import { indexedDBcall } from '../indexeddb/indexeddb';
import { checkClass } from '../utils/check-class';
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
  modal.classList.add('open-modal');
  overlay.classList.add('open-modal');
  document.body.classList.add('lock');
}

export function closeModalRegister(): void {
  modal.classList.remove('open-modal');
  overlay.classList.remove('open-modal');
  document.body.classList.remove('lock');
}

window.onload = () => {
  function checkOpenModalRegister(): void {
    if (!checkClass(modal, 'open-modal')) {
      openModalRegister();
    }
  }

  function checkCloseModalRegister(): void {
    if (checkClass(modal, 'open-modal')) {
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
