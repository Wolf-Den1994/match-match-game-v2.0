import { indexedDBcall } from '../indexeddb/indexeddb';
import { modal, overlay } from './register-html';

export const btnRegister = document.querySelector('.btn-register');
export const btnStartGame = document.querySelector('.btn-start-game');

window.onload = () => {
  function openModalRegister() {
    if (!modal) throw new Error('modal is not found');
    if (!overlay) throw new Error('overlay is not found');

    if (!modal.classList.contains('open-modal')) {
      modal.classList.add('open-modal');
      overlay.classList.add('open-modal');
      document.body.classList.add('lock');
    }
  }

  function closeModalRegister() {
    if (!modal) throw new Error('modal is not found');
    if (!overlay) throw new Error('overlay is not found');

    if (modal.classList.contains('open-modal')) {
      modal.classList.remove('open-modal');
      overlay.classList.remove('open-modal');
      document.body.classList.remove('lock');
    }
  }

  if (btnRegister) {
    btnRegister.addEventListener('click', openModalRegister);
  }
  if (overlay) {
    overlay.addEventListener('click', closeModalRegister);
  }

  indexedDBcall();
};
