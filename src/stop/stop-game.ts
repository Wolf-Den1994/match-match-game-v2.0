import { getObjTimeField } from '../game/field-time';
import { btnStartGame, btnStopGame } from '../header/buttons';
import { time } from '../stopwatch/stopwatch';
import { HIDDEN } from '../utils/consts';
import { updateClassList } from '../utils/update-class';

export const stopGame = function stopGameNow(): void {
  const objTimeField = getObjTimeField();
  objTimeField.timeField = null;
  updateClassList(btnStopGame, btnStartGame, HIDDEN);
  time.stop();
};
