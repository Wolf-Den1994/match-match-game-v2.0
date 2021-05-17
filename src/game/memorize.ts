import { CountTime } from '../stopwatch/stopwatch';

export const time = new CountTime();

export function toMemorizeCards(): void {
  const cards = document.getElementsByClassName('card');
  const arrCards: HTMLElement[] = Array.prototype.slice.call(cards);
  setTimeout(() => {
    arrCards.forEach((item) => item.classList.remove('turn'));
    time.start();
  }, 2000); // need 30000
  // start timer
  // setTimeout(() => {
  //   time.stop();
  // }, 5100); // на 100 больше
}
