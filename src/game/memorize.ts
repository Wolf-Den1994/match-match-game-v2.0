import { time } from '../stopwatch/stopwatch';
import { getObjArrsCard } from '../utils/utils';
import { followTheCard } from './follow-card';
import { setWidth } from './set-width';

const TIME_TO_MEMORIZE = 3000;

export function toMemorizeCards(): void {
  const objArrsCard = getObjArrsCard();
  setWidth();
  setTimeout(() => {
    objArrsCard.arrCards.forEach((item) => item.classList.remove('turn'));
    followTheCard();
    time.start();
  }, TIME_TO_MEMORIZE);
}
