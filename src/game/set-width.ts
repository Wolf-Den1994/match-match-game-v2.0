import { addClassList } from '../utils/add-class';
import { Difficulty } from '../utils/enum';
import { getObjArrsCard } from '../utils/utils';
import { objWithSetting } from './obj-setting';

const EASY_DIFF = 4;
const MIDDLE_DIFF = 6;

const setClasses = function setClassesCards(arr: HTMLElement[]): void {
  arr.forEach((card) => {
    if (objWithSetting.difficulty === EASY_DIFF) {
      addClassList(card, Difficulty.Easy);
    } else if (objWithSetting.difficulty === MIDDLE_DIFF) {
      addClassList(card, Difficulty.Middle);
    } else {
      addClassList(card, Difficulty.Hard);
    }
  });
};

export const setWidth = function setWidthField(): void {
  const objArrsCard = getObjArrsCard();

  setClasses(objArrsCard.arrCards);
  setClasses(objArrsCard.arrFrontDivs);
  setClasses(objArrsCard.arrBackDivs);
};
