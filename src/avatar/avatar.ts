import { divAvatar } from '../header/div-avatar';
import { person } from '../indexeddb/indexeddb';
import { AVATAR, ZERO } from '../utils/consts';
import { removeClassList } from '../utils/remove-class';

const input = <HTMLInputElement>document.querySelector('#user-avatar');
const label = <HTMLLabelElement>document.querySelector('.label-user-avatar');

const image = function imageLoad() {
  return new Promise((res) => {
    if (input.files) {
      const file = input.files[ZERO];
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        if (reader.result) {
          res(reader.result);
        }
      };
    }
  });
};

input.onchange = () => {
  image().then((res) => {
    const userPhoto = `${res}`;
    localStorage.setItem(AVATAR, userPhoto);
    const avatarBase64 = localStorage.getItem(AVATAR);
    removeClassList(divAvatar, 'hide');
    label.children[ZERO]?.remove();
    person.avatar = `${avatarBase64}`;
    divAvatar.style.backgroundImage = `url('${avatarBase64}')`;
    label.style.backgroundImage = `url('${avatarBase64}')`;
  });
};
