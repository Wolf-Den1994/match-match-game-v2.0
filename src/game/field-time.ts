import { TIME } from '../utils/consts';

export const gameField = `
  <main class='main-field'></main>
`;

export function createField(): void {
  const field = <HTMLElement>document.querySelector('.main-field');
  const wrapper = document.createElement('section');
  wrapper.className = TIME;
  wrapper.id = TIME;
  if (field) field.prepend(wrapper);

  const stopwatch = document.createElement('div');
  stopwatch.className = 'stopwatch';
  wrapper.append(stopwatch);

  const hour = document.createElement('span');
  hour.id = 'hour';
  hour.innerHTML = '00';
  stopwatch.append(hour);

  const colonOne = document.createElement('span');
  colonOne.innerHTML = ':';
  stopwatch.append(colonOne);

  const min = document.createElement('span');
  min.id = 'min';
  min.innerHTML = '00';
  stopwatch.append(min);

  const colonTwo = document.createElement('span');
  colonTwo.innerHTML = ':';
  stopwatch.append(colonTwo);

  const sec = document.createElement('span');
  sec.id = 'sec';
  sec.innerHTML = '00';
  stopwatch.append(sec);
}

interface IPeriod {
  hour: HTMLElement;
  min: HTMLElement;
  sec: HTMLElement;
}

export function getObjPeriod(): IPeriod {
  const hour = <HTMLElement>document.getElementById('hour');
  const min = <HTMLElement>document.getElementById('min');
  const sec = <HTMLElement>document.getElementById('sec');

  return {
    hour,
    min,
    sec,
  };
}
