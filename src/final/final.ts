import { getObjPeriod } from '../game/field-time';
import { toScore } from '../score/to-score';
import { addClassList } from '../utils/add-class';
import { OPEN_MODAL } from '../utils/consts';
import { isNotFound } from '../utils/errors';

export const congratulateTheWinner = function congratulateWinner(): void {
  const modalCongratulate = document.querySelector('.modal-congratulate');
  const timeFromSpan = document.querySelector('.congratulate-time');
  const overlay = document.getElementById('overlay');
  const time = getObjPeriod();

  if (!modalCongratulate) throw new Error(`modal final ${isNotFound()}`);
  if (!timeFromSpan) throw new Error(`span from time ${isNotFound()}`);
  if (!overlay) throw new Error(`overlay ${isNotFound()}`);

  const h = time.hour.innerText;
  const m = time.min.innerText;
  const s = time.sec.innerText;

  addClassList(modalCongratulate, OPEN_MODAL);
  addClassList(overlay, OPEN_MODAL);

  timeFromSpan.innerHTML = `${h}:${m}:${s}`;

  toScore(h, m, s);
};
