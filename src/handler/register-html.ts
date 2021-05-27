import { root } from '../routes/routes';

const avatarEllipseHTML = require('../assets/image/avatar-ellipse.png');

export const registerHTML = `
  <div class="modal-register">
    <h2 class="main-title">Registr new Player</h2>
    <div class="form-register-wrapper">
      <form action="#" class="form-register">
        <div id="div-item1" class="form-item-register">
          <input type="text" required id="user-name" placeholder="Your name">
          <label for="user-name">First Name</label>
          <svg 
            id="img-check1" 
            class="img-check-register check-hidden"
          ></svg>
        </div>
        <div id="div-item2" class="form-item-register">
          <input 
            type="text" 
            required 
            id="user-lastname" 
            placeholder="Your surname"
          >
          <label for="user-lastname">Last Name</label>
          <svg 
            id="img-check2" 
            class="img-check-register check-hidden"
          ></svg>
        </div>
        <div id="div-item3" class="form-item-register">
          <input type="email" required id="user-email" placeholder="Your email">
          <label for="user-email">E-mail</label>
          <svg 
            id="img-check3" 
            class="img-check-register check-hidden"
          ></svg>
        </div>
      </form>
      <div class="form-register-avatar">
        <img 
          src="${avatarEllipseHTML}" 
          alt="load-avatar"
          id="user-avatar"
          class="form-user-avatar"
        >
      </div>
    </div>
    <div class="form-register-buttons">
      <button 
        class="form-submit invalid" 
        type="submit" 
        disabled
      >
        add user
      </button>
      <button class="form-cancel">cancel</button>
    </div>
  </div>
`;

export const overlayHTML = `
  <div class="overlay" id="overlay"></div>
`;

function renderingModalRegister(): void {
  if (!root) throw new Error('root is not found');
  root.insertAdjacentHTML('beforebegin', registerHTML);
  root.insertAdjacentHTML('afterend', overlayHTML);
}
renderingModalRegister();

export const modal = document.querySelector('.modal-register');
export const overlay = document.getElementById('overlay');
export const btnFormCancel = <HTMLButtonElement>(
  document.querySelector('.form-cancel')
);
export const btnFormSubmit = <HTMLButtonElement>(
  document.querySelector('.form-submit')
);
export const imagesCheck = document.querySelectorAll('.img-check-register');
