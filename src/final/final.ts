import { getObjPeriod } from '../game/field-time';
import { toScore } from '../score/to-score';
import { addClassList } from '../utils/add-class';
import { OPEN_MODAL } from '../utils/consts';

export const congratulateTheWinner = function congratulateWinner(): void {
  const modalCongratulate = <HTMLElement>(
    document.querySelector('.modal-congratulate')
  );
  const timeFromSpan = <HTMLElement>(
    document.querySelector('.congratulate-time')
  );
  const overlay = <HTMLElement>document.getElementById('overlay');
  const time = getObjPeriod();

  const h = time.hour.innerText;
  const m = time.min.innerText;
  const s = time.sec.innerText;

  addClassList(modalCongratulate, OPEN_MODAL);
  addClassList(overlay, OPEN_MODAL);

  timeFromSpan.innerHTML = `${h}:${m}:${s}`;

  toScore(h, m, s);
};
