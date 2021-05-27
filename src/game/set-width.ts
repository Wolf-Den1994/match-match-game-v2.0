import { Difficulty } from '../utils/enum';
import { backDivs, cardDivs, frontDivs } from '../utils/utils';
import { objWithSetting } from './obj-setting';

const EASY_DIFF = 4;
const MIDDLE_DIFF = 6;

function setClasses(arr: HTMLElement[]): void {
  arr.forEach((card) => {
    if (objWithSetting.difficulty === EASY_DIFF) {
      card.classList.add(Difficulty.Easy);
    } else if (objWithSetting.difficulty === MIDDLE_DIFF) {
      card.classList.add(Difficulty.Middle);
    } else {
      card.classList.add(Difficulty.Hard);
    }
  });
}

export function setWidth(): void {
  const arrCardDivs: HTMLElement[] = Array.prototype.slice.call(cardDivs);
  const arrFrontDivs: HTMLElement[] = Array.prototype.slice.call(frontDivs);
  const arrBackDivs: HTMLElement[] = Array.prototype.slice.call(backDivs);

  setClasses(arrCardDivs);
  setClasses(arrFrontDivs);
  setClasses(arrBackDivs);
}
