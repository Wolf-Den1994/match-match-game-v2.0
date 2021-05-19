// import { renderField } from './render-field';

export const gameField = `
  <main class='main-field'></main>
`;

export function createField(): void {
  const field = <HTMLElement>document.querySelector('.main-field');
  const wrapper = document.createElement('section');
  wrapper.className = 'time';
  wrapper.id = 'time';
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

  // const buttonS = document.createElement('button');
  // buttonS.id = 'start';
  // buttonS.innerHTML = 'start';
  // stopwatch.append(buttonS);

  // const buttonStop = document.createElement('button');
  // buttonStop.id = 'stop';
  // buttonStop.innerHTML = 'stop';
  // stopwatch.append(buttonStop);

  // renderField(field);
}
