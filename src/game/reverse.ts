import { TURN } from '../utils/consts';
import { removeClassList } from '../utils/remove-class';

const TIME_AFTER_WHICH_TO_RUN_BACK = 1300;

export const reverseBack = function reverseBackCard(
  arrCards: HTMLElement[],
): void {
  setTimeout(() => {
    arrCards.forEach((item) => {
      removeClassList(item, TURN);
    });
  }, TIME_AFTER_WHICH_TO_RUN_BACK);
};
