import { time } from '../stopwatch/stopwatch';
import { followTheCard } from './follow-card';

// let count = 0;

export function toMemorizeCards(): void {
  const cards = document.getElementsByClassName('card');
  const arrCards: HTMLElement[] = Array.prototype.slice.call(cards);
  setTimeout(() => {
    arrCards.forEach((item) => item.classList.remove('turn'));
    followTheCard();
    // console.log(count)
    // if (count === 0) {
    // count++;
    time.start();
    // }
  }, 2000);

  // need 30000 start timer
  // setTimeout(() => {
  //   time.stop();
  // }, 5100); // на 100 больше
}
