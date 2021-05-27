import { time } from '../stopwatch/stopwatch';
import { cardDivs } from '../utils/utils';
import { followTheCard } from './follow-card';
import { setWidth } from './set-width';

const TIME_TO_MEMORIZE = 3000;

export function toMemorizeCards(): void {
  const arrCards: HTMLElement[] = Array.prototype.slice.call(cardDivs);
  setWidth();
  setTimeout(() => {
    arrCards.forEach((item) => item.classList.remove('turn'));
    followTheCard();
    time.start();
  }, TIME_TO_MEMORIZE);
}
