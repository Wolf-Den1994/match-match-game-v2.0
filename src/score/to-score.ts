import { objCountComparison } from '../game/obj-count';
import { person } from '../indexeddb/indexeddb';
import { toNumber } from '../utils/toNumber';

export function toScore(hour: string, min: string, sec: string): void {
  const time = `${hour}:${min}:${sec}`;
  let timeResult = 0;
  const arrTime = time.split(':');
  timeResult =
    toNumber(arrTime[0]) * 60 * 60 +
    toNumber(arrTime[1]) * 60 +
    toNumber(arrTime[2]);
  const scoreValue =
    (objCountComparison.countComparison -
      objCountComparison.countErroneousСomparison) *
      100 -
    timeResult * 10;
  person.score = scoreValue > 0 ? `${scoreValue}` : `0`;
}
