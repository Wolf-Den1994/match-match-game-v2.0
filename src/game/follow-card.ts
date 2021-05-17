import { time } from './memorize';
import { objWithSetting } from './obj-setting';
import { paintGreen } from './paint';
import { reverseBack } from './reverse';

function final() {
  let count = 0;
  const cards = document.getElementsByClassName('card');
  const arrCards = Array.prototype.slice.call(cards);
  arrCards.forEach((item) => {
    if (item.classList.contains('paint-green')) {
      count++;
    }
  });
  if (count === +objWithSetting.difficulty * +objWithSetting.difficulty) {
    time.stop();
    return;
  }
  count = 0;
  setTimeout(final, 500);
}

export function followTheCard(): void {
  // вызывать лучше в мемеоризе после 30 сек с тамймеро вместе
  const cardonField = <HTMLElement>document.getElementById('field');
  const cards = document.getElementsByClassName('card');
  const arrCards: HTMLElement[] = Array.prototype.slice.call(cards);
  let count = 0;
  let firstCard: null | string = null;
  let firstItem: null | HTMLElement = null;
  cardonField.addEventListener('click', (event) => {
    const target = <HTMLElement>event.target;
    const back = <HTMLElement>target.parentElement;
    const flipper = <HTMLElement>back.parentElement;
    const card = <HTMLElement>flipper.parentElement;
    // console.log('card', card);
    if (card.classList.contains('card')) {
      card.classList.add('turn');
      arrCards.forEach((item: HTMLElement) => {
        // console.log('item', item)
        if (item.classList.contains('turn')) {
          count++;
        }
        // console.log(count);
        if (item.classList.contains('turn') && count !== 2) {
          firstCard = item.className
            .split(' ')[1]
            .slice(-2)
            .split('')
            .map((elem: string | number) => {
              if (!Number.isNaN(+elem)) {
                return +elem;
              }
              return +elem;
            })
            .join('');
          // console.log('firstCard', firstCard);
          firstItem = item;
        }
        if (count === 2) {
          count = 0;
          const secondCard = item.className
            .split(' ')[1]
            .slice(-2)
            .split('')
            .map((elem: string | number) => {
              if (!Number.isNaN(+elem)) {
                return +elem;
              }
              return +elem;
            })
            .join('');
          cardonField.style.pointerEvents = 'none';
          setTimeout(() => {
            cardonField.style.pointerEvents = 'auto';
          }, 1300);
          // console.log('firstCard', firstCard, 'secondCard',secondCard)
          if (firstCard === secondCard) {
            // console.log('paint');
            paintGreen(firstItem, item);
            // reverseBack(arrCards);
          } else {
            // console.log('reverse');
            reverseBack(arrCards);
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
