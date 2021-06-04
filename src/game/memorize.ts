import { time } from '../stopwatch/stopwatch';
import { ElemClasses } from '../utils/enum';
import { removeClassList } from '../utils/remove-class';
import { getObjArrsCard } from '../utils/utils';
import { getObjTimeField } from './field-time';
import { followTheCard } from './follow-card';
import { setWidth } from './set-width';

const TIME_TO_MEMORIZE = 30000;

export const toMemorizeCards = function memorizeCards(): void {
  const objArrsCard = getObjArrsCard();
  setWidth();
  setTimeout(() => {
    const objTimeField = getObjTimeField();
    if (!objTimeField.timeField) return;
    objArrsCard.arrCards.forEach((item) =>
      removeClassList(item, ElemClasses.TURN),
    );
    followTheCard();
    time.start();
  }, TIME_TO_MEMORIZE);
};
