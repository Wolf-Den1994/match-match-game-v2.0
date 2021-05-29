import { btnStartGame, btnStopGame } from '../header/buttons';
import { time } from '../stopwatch/stopwatch';
import { HIDDEN } from '../utils/consts';

export function stopGame(): void {
  btnStopGame.classList.add(HIDDEN);
  btnStartGame.classList.remove(HIDDEN);
  time.stop();
}
