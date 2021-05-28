import { congratulateTheWinner } from '../final/final';
import { time } from '../stopwatch/stopwatch';
import { toNumber } from '../utils/toNumber';
import { getObjArrsCard } from '../utils/utils';
import { objCountComparison } from './obj-count';
import { objWithSetting } from './obj-setting';
import { paintGreen, paintRed } from './paint';
import { reverseBack } from './reverse';

const CALL_FN_FINAL = 500;
const TURN_ON_THE_MOUSE = 1300;

function final(): void {
  let count = 0;
  const objArrsCard = getObjArrsCard();
  objArrsCard.arrCards.forEach((item) => {
    if (item.classList.contains('paint-green')) {
      count++;
    }
  });
  if (count === objWithSetting.difficulty * objWithSetting.difficulty) {
    time.stop();
    congratulateTheWinner();
    return;
  }
  count = 0;
  setTimeout(final, CALL_FN_FINAL);
}

function getNumberCard(elem: string): string {
  const cardNumber = elem
    .split(' ')[1]
    .slice(-2)
    .split('')
    .map((item: string | number) => {
      if (!Number.isNaN(toNumber(item))) {
        return toNumber(item);
      }
      return toNumber(item);
    })
    .join('');
  return cardNumber;
}

export function followTheCard(): void {
  const cardonField = <HTMLElement>document.getElementById('field');
  const objArrsCard = getObjArrsCard();
  let count = 0;
  let firstCard: null | string = null;
  let firstItem: null | HTMLElement = null;
  cardonField.addEventListener('click', (event) => {
    const target = <HTMLElement>event.target;
    const back = <HTMLElement>target.parentElement;
    const flipper = <HTMLElement>back.parentElement;
    const card = <HTMLElement>flipper.parentElement;
    if (card.classList.contains('card')) {
      card.classList.add('turn');
      objArrsCard.arrCards.forEach((item: HTMLElement) => {
        if (item.classList.contains('turn')) {
          count++;
        }
        if (item.classList.contains('turn') && count !== 2) {
          firstCard = getNumberCard(item.className);
          firstItem = item;
        }
        if (count === 2) {
          count = 0;
          objCountComparison.countComparison++;
          const secondCard = getNumberCard(item.className);
          cardonField.style.pointerEvents = 'none';
          setTimeout(() => {
            cardonField.style.pointerEvents = 'auto';
          }, TURN_ON_THE_MOUSE);
          if (firstCard === secondCard) {
            paintGreen(firstItem, item);
          } else {
            objCountComparison.countErroneousСomparison++;
            paintRed(firstItem, item);
            reverseBack(objArrsCard.arrCards);
          }
          count = 0;
          firstItem = null;
        }
      });
      count = 0;
    }
  });
  cardonField.addEventListener('click', final, { once: true });
}
