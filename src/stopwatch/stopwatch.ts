import { getObjPeriod } from '../game/field-time';

export class CountTime {
  flag: number | null;

  constructor() {
    this.flag = null;
    this.work = this.work.bind(this);
  }

  work(): void {
    const CLOCK_FACE = 60;
    const period = getObjPeriod();
    if (this.flag === undefined) return;
    let s = parseInt(period.sec.innerHTML, 10);
    s += 1;
    if (s < 10) {
      period.sec.innerHTML = `0${s}`;
    } else {
      period.sec.innerHTML = `${s}`;
    }
    if (s === CLOCK_FACE) {
      s = 0;
      period.sec.innerHTML = `0${s}`;
      let m = parseInt(period.min.innerHTML, 10);
      m += 1;
      if (m < 10) {
        period.min.innerHTML = `0${m}`;
      } else {
        period.min.innerHTML = `${m}`;
      }
      if (m === CLOCK_FACE) {
        m = 0;
        period.min.innerHTML = `0${m}`;
        let h = parseInt(period.hour.innerHTML, 10);
        h += 1;
        if (h < 10) {
          period.hour.innerHTML = `0${h}`;
        } else {
          period.hour.innerHTML = `${h}`;
        }
      }
    }
  }

  stop(): void {
    if (this.flag) {
      window.clearInterval(this.flag);
    }
  }

  start(): void {
    const TIME_CALL_FN_WORK = 1000;
    this.stop();
    this.flag = window.setInterval(this.work, TIME_CALL_FN_WORK);
  }
}

export const time = new CountTime();
