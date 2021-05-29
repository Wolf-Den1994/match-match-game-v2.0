import { getObjPeriod } from '../game/field-time';
import { toScore } from '../score/to-score';
import { OPEN_MODAL } from '../utils/consts';

export function congratulateTheWinner(): void {
  const modalCongratulate = document.querySelector('.modal-congratulate');
  const timeFromSpan = document.querySelector('.congratulate-time');
  const overlay = document.getElementById('overlay');
  const time = getObjPeriod();

  if (!modalCongratulate) throw new Error('modal final is not found');
  if (!timeFromSpan) throw new Error('span from time is not found');
  if (!overlay) throw new Error('overlay is not found');

  const h = time.hour.innerText;
  const m = time.min.innerText;
  const s = time.sec.innerText;

  modalCongratulate.classList.add(OPEN_MODAL);
  overlay.classList.add(OPEN_MODAL);

  timeFromSpan.innerHTML = `${h}:${m}:${s}`;

  toScore(h, m, s);
}
