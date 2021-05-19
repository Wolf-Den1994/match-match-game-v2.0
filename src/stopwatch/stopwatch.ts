export class CountTime {
  flag: number | null;

  constructor() {
    this.flag = null;
    this.work = this.work.bind(this);
  }

  work(): void {
    const hour = <HTMLElement>document.getElementById('hour');
    const min = <HTMLElement>document.getElementById('min');
    const sec = <HTMLElement>document.getElementById('sec');
    if (this.flag === undefined) return;
    let s = parseInt(sec.innerHTML, 10);
    s += 1;
    if (s < 10) {
      sec.innerHTML = `0${s}`;
    } else {
      sec.innerHTML = `${s}`;
    }
    if (s === 60) {
      s = 0;
      sec.innerHTML = `0${s}`;
      let m = parseInt(min.innerHTML, 10);
      m += 1;
      if (m < 10) {
        min.innerHTML = `0${m}`;
      } else {
        min.innerHTML = `${m}`;
      }
      if (m === 60) {
        m = 0;
        min.innerHTML = `0${m}`;
        let h = parseInt(hour.innerHTML, 10);
        h += 1;
        if (h < 10) {
          hour.innerHTML = `0${h}`;
        } else {
          hour.innerHTML = `${h}`;
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
    this.stop();
    this.flag = window.setInterval(this.work, 1000);
  }
}

export const time = new CountTime();
