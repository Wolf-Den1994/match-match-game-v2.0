import { time } from '../game/memorize';
import { btnStartGame, btnStopGame } from '../header/header';

export function stopGame(): void {
  btnStopGame.classList.add('hidden');
  btnStartGame.classList.remove('hidden');
  time.stop();
}
