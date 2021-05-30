import { btnStartGame, btnStopGame } from '../header/buttons';
import { time } from '../stopwatch/stopwatch';
import { HIDDEN } from '../utils/consts';
import { updateClassList } from '../utils/update-class';

export const stopGame = function stopGameNow(): void {
  updateClassList(btnStopGame, btnStartGame, HIDDEN);
  time.stop();
};
