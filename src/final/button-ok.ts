import { overlay } from '../handler/register-html';
import { checkClass } from '../utils/check-class';
import { ElemClasses } from '../utils/enum';
import { removeClassList } from '../utils/remove-class';
import { btnFinal, modalCongratulate } from './final-html';

const hideModFinal = function hideModalFinal(): void {
  if (checkClass(modalCongratulate, ElemClasses.OpenModal)) {
    removeClassList(modalCongratulate, ElemClasses.OpenModal);
    removeClassList(overlay, ElemClasses.OpenModal);
  }
};

btnFinal.addEventListener('click', hideModFinal);
