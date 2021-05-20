import { objWithSetting } from './obj-setting';

const EASY_DIFF = 4;
const MIDDLE_DIFF = 6;

function setClasses(arr: HTMLElement[]): void {
  arr.forEach((card) => {
    if (+objWithSetting.difficulty === EASY_DIFF) {
      card.classList.add('easy');
    } else if (+objWithSetting.difficulty === MIDDLE_DIFF) {
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
