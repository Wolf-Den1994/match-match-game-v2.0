import { btnStartGame, btnStopGame } from '../header/buttons';
import { time } from '../stopwatch/stopwatch';

export function stopGame(): void {
  btnStopGame.classList.add('hidden');
  btnStartGame.classList.remove('hidden');
  time.stop();
}
