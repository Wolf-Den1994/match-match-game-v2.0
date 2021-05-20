import { objWithSetting } from './obj-setting';

function setClasses(arr: HTMLElement[]) {
  arr.forEach((card) => {
    if (+objWithSetting.difficulty === 4) {
      card.classList.add('easy');
    } else if (+objWithSetting.difficulty === 6) {
      card.classList.add('middle');
    } else {
      card.classList.add('hard');
    }
  });
}

export function setWidth(): void {
  const cardDivs = document.getElementsByClassName('card');
  const frontDivs = document.getElementsByClassName('front');
  const backDivs = document.getElementsByClassName('back');

  const arrCardDivs: HTMLElement[] = Array.prototype.slice.call(cardDivs);
  const arrFrontDivs: HTMLElement[] = Array.prototype.slice.call(frontDivs);
  const arrBackDivs: HTMLElement[] = Array.prototype.slice.call(backDivs);

  setClasses(arrCardDivs);
  setClasses(arrFrontDivs);
  setClasses(arrBackDivs);
}
