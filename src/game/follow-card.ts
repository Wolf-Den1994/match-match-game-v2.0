import { congratulateTheWinner } from '../final/final';
import { time } from '../stopwatch/stopwatch';
import { checkClass } from '../utils/check-class';
import { zero } from '../utils/consts';
import { PointerEvent } from '../utils/enum';
import { toNumber } from '../utils/toNumber';
import { getObjArrsCard } from '../utils/utils';
import { objCountComparison } from './obj-count';
import { objWithSetting } from './obj-setting';
import { paintGreen, paintRed } from './paint';
import { reverseBack } from './reverse';

const TIME_CALL_FN_FINAL = 500;
const TIME_TURN_ON_THE_MOUSE = 1300;
const TWO_CARD = 2;

function final(): void {
  let count = zero;
  const objArrsCard = getObjArrsCard();
  objArrsCard.arrCards.forEach((item) => {
    if (checkClass(item, 'paint-green')) {
      count++;
    }
  });
  if (count === objWithSetting.difficulty * objWithSetting.difficulty) {
    time.stop();
    congratulateTheWinner();
    return;
  }
  count = zero;
  setTimeout(final, TIME_CALL_FN_FINAL);
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
  let count = zero;
  let firstCard: null | string = null;
  let firstItem: null | HTMLElement = null;
  cardonField.addEventListener('click', (event) => {
    const target = <HTMLElement>event.target;
    const back = <HTMLElement>target.parentElement;
    const flipper = <HTMLElement>back.parentElement;
    const card = <HTMLElement>flipper.parentElement;
    if (checkClass(card, 'card')) {
      card.classList.add('turn');
      objArrsCard.arrCards.forEach((item: HTMLElement) => {
        if (checkClass(item, 'turn')) {
          count++;
        }
        if (checkClass(item, 'turn') && count !== TWO_CARD) {
          firstCard = getNumberCard(item.className);
          firstItem = item;
        }
        if (count === TWO_CARD) {
          count = zero;
          objCountComparison.countComparison++;
          const secondCard = getNumberCard(item.className);
          cardonField.style.pointerEvents = PointerEvent.None;
          setTimeout(() => {
            cardonField.style.pointerEvents = PointerEvent.Auto;
          }, TIME_TURN_ON_THE_MOUSE);
          if (firstCard === secondCard) {
            paintGreen(firstItem, item);
          } else {
            objCountComparison.countErroneousСomparison++;
            paintRed(firstItem, item);
            reverseBack(objArrsCard.arrCards);
          }
          count = zero;
          firstItem = null;
        }
      });
      count = zero;
    }
  });
  cardonField.addEventListener('click', final, { once: true });
}
