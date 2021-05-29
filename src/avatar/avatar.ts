import { divAvatar } from '../header/header';
import { person } from '../indexeddb/indexeddb';

const input = <HTMLInputElement>document.querySelector('#user-avatar');
const label = <HTMLLabelElement>document.querySelector('.label-user-avatar');

function imageLoad() {
  return new Promise((res) => {
    if (input.files) {
      const file = input.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        if (reader.result) {
          res(reader.result);
        }
      };
    }
  });
}

input.onchange = () => {
  imageLoad().then((res) => {
    const userPhoto = `${res}`;
    localStorage.setItem('avatar', userPhoto);
    const x = localStorage.getItem('avatar');
    divAvatar.classList.remove('hide');
    label.children[0]?.remove();
    person.avatar = `${x}`;
    divAvatar.style.backgroundImage = `url('${x}')`;
    label.style.backgroundImage = `url('${x}')`;
  });
};
