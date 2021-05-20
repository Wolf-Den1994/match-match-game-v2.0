import { time } from '../stopwatch/stopwatch';
import { followTheCard } from './follow-card';
import { setWidth } from './set-width';

const TIME_TO_MEMORIZE = 30000;

export function toMemorizeCards(): void {
  const cards = document.getElementsByClassName('card');
  const arrCards: HTMLElement[] = Array.prototype.slice.call(cards);
  setWidth();
  setTimeout(() => {
    arrCards.forEach((item) => item.classList.remove('turn'));
    followTheCard();
    time.start();
  }, TIME_TO_MEMORIZE);
}
