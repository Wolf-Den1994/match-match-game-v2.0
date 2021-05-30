import { objCountComparison } from '../game/obj-count';
import { person } from '../indexeddb/indexeddb';
import { zero } from '../utils/consts';
import { toNumber } from '../utils/toNumber';

export const toScore = function score(
  hour: string,
  min: string,
  sec: string,
): void {
  const CLOCK_FACE = 60;
  const time = `${hour}:${min}:${sec}`;
  let timeResult = zero;
  const arrTime = time.split(':');
  timeResult =
    toNumber(arrTime[0]) * CLOCK_FACE * CLOCK_FACE +
    toNumber(arrTime[1]) * CLOCK_FACE +
    toNumber(arrTime[2]);
  const scoreValue =
    (objCountComparison.countComparison -
      objCountComparison.countErroneousСomparison) *
      100 -
    timeResult * 10;
  person.score = scoreValue > zero ? `${scoreValue}` : `0`;
};
