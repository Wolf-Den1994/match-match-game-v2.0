import { toScore } from '../score/to-score';

export function congratulateTheWinner(): void {
  const modalCongratulate = document.querySelector('.modal-congratulate');
  const timeFromSpan = document.querySelector('.congratulate-time');
  const overlay = document.getElementById('overlay');
  const hour = document.getElementById('hour');
  const min = document.getElementById('min');
  const sec = document.getElementById('sec');

  if (!modalCongratulate) throw new Error('modal final is not found');
  if (!timeFromSpan) throw new Error('span from time is not found');
  if (!overlay) throw new Error('overlay is not found');
  if (!hour) throw new Error('hour is not found');
  if (!min) throw new Error('min is not found');
  if (!sec) throw new Error('sec is not found');

  const h = hour.innerText;
  const m = min.innerText;
  const s = sec.innerText;

  modalCongratulate.classList.add('open-modal');
  overlay.classList.add('open-modal');

  timeFromSpan.innerHTML = `${h}:${m}:${s}`;

  // отправить в бд очки и юзера (только сейчас! а не в Indexeddb.ts)
  // или передавать в Indexeddb.ts объект и уже записывать там !!!
  toScore(h, m, s);
}
