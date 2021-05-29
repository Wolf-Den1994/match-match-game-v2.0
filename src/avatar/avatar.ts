import { divAvatar } from '../header/div-avatar';
import { person } from '../indexeddb/indexeddb';
import { zero } from '../utils/consts';
import { removeClassList } from '../utils/remove-class';

const input = <HTMLInputElement>document.querySelector('#user-avatar');
const label = <HTMLLabelElement>document.querySelector('.label-user-avatar');

function imageLoad() {
  return new Promise((res) => {
    if (input.files) {
      const file = input.files[zero];
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
    const avatar = localStorage.getItem('avatar');
    removeClassList(divAvatar, 'hide');
    label.children[zero]?.remove();
    person.avatar = `${avatar}`;
    divAvatar.style.backgroundImage = `url('${avatar}')`;
    label.style.backgroundImage = `url('${avatar}')`;
  });
};
