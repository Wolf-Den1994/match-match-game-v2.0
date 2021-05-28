import { btnStartGame, btnStopGame } from '../handler/register';
import { createField } from './field-time';

function toRunStartGame(): void {
  if (btnStopGame.classList.contains('hidden')) {
    btnStartGame.classList.add('hidden');
    btnStopGame.classList.remove('hidden');

    createField();
  }
}

btnStartGame.addEventListener('click', toRunStartGame);
