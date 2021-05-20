import { btnStartGame, btnStopGame } from '../handler/register';
import { createField } from './field';

function toRunStartGame(): void {
  if (!btnStartGame) throw new Error('Button Start Game is not found');
  if (!btnStopGame) throw new Error('Button Stop Game is not found');

  if (btnStopGame.classList.contains('hidden')) {
    btnStartGame.classList.add('hidden');
    btnStopGame.classList.remove('hidden');

    createField();
  }
}

if (!btnStartGame) throw new Error('Button Start Game is not found');
btnStartGame.addEventListener('click', toRunStartGame);
