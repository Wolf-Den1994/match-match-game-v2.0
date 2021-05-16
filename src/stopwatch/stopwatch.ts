export function countTime(): void {
  let flag = false;
  const hour = <HTMLElement>document.getElementById('hour');
  const min = <HTMLElement>document.getElementById('min');
  const sec = <HTMLElement>document.getElementById('sec');
  const buttonS = <HTMLButtonElement>document.getElementById('start');
  const buttonStop = <HTMLButtonElement>document.getElementById('stop');

  function work() {
    if (flag) return;
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

  function stop() {
    flag = true;
    window.clearInterval();
  }

  function start() {
    flag = false;
    window.setInterval(work, 1000);
  }

  buttonS.addEventListener('click', start);
  buttonStop.addEventListener('click', stop);
}
