import { Difficulty } from '../utils/enum';
import { getObjArrsCard } from '../utils/utils';
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
  const objArrsCard = getObjArrsCard();

  setClasses(objArrsCard.arrCards);
  setClasses(objArrsCard.arrFrontDivs);
  setClasses(objArrsCard.arrBackDivs);
}
