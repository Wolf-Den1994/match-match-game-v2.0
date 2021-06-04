import { getObjTimeField } from '../game/field-time';
import { btnStartGame, btnStopGame } from '../header/buttons';
import { time } from '../stopwatch/stopwatch';
import { ElemClasses } from '../utils/enum';
import { updateClassList } from '../utils/update-class';

export const stopGame = function stopGameNow(): void {
  const objTimeField = getObjTimeField();
  objTimeField.timeField = null;
  updateClassList(btnStopGame, btnStartGame, ElemClasses.Hidden);
  time.stop();
};
