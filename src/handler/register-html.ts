import { root } from '../routes/routes';

const avatarEllipseHTML = require('../assets/image/avatar-ellipse.png');

export const registerHTML = `
  <div class="modal-register">
    <h2 class="main-title">New Player Registration</h2>
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
        <p 
          id="error-check1" 
          class="form-error-register check-hidden"
        >
          enter valid data
        </p>
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
        <p 
          id="error-check2" 
          class="form-error-register check-hidden"
        >
          enter valid data
        </p>
        <div id="div-item3" class="form-item-register">
          <input type="email" required id="user-email" placeholder="Your email">
          <label for="user-email">E-mail</label>
          <svg 
            id="img-check3" 
            class="img-check-register check-hidden"
          ></svg>
        </div>
        <p 
          id="error-check3" 
          class="form-error-register check-hidden"
        >
          enter valid data
        </p>
      </form>
      <div class="form-register-avatar">
        <label for="user-avatar" class="label-user-avatar">
          <img 
          src="${avatarEllipseHTML}" 
          alt="load-avatar"
          >
        </label>
        <input 
          type="file" 
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
  root.insertAdjacentHTML('beforebegin', registerHTML);
  root.insertAdjacentHTML('afterend', overlayHTML);
}
renderingModalRegister();

export const modal = <HTMLElement>document.querySelector('.modal-register');
export const overlay = <HTMLElement>document.getElementById('overlay');
export const btnFormCancel = <HTMLButtonElement>(
  document.querySelector('.form-cancel')
);
export const btnFormSubmit = <HTMLButtonElement>(
  document.querySelector('.form-submit')
);
