import { StopWatchTime, Tags } from '../utils/enum';

export const gameField = `
  <main class='main-field'></main>
`;

export const createField = function createFieldTime(): void {
  const field = <HTMLElement>document.querySelector('.main-field');
  const wrapper = document.createElement(Tags.Section);
  wrapper.className = StopWatchTime.Time;
  wrapper.id = StopWatchTime.Time;
  if (field) field.prepend(wrapper);

  const stopwatch = document.createElement(Tags.Div);
  stopwatch.className = 'stopwatch';
  wrapper.append(stopwatch);

  const hour = document.createElement(Tags.Span);
  hour.id = StopWatchTime.Hour;
  hour.innerHTML = StopWatchTime.Begin;
  stopwatch.append(hour);

  const colonOne = document.createElement(Tags.Span);
  colonOne.innerHTML = StopWatchTime.Separator;
  stopwatch.append(colonOne);

  const min = document.createElement(Tags.Span);
  min.id = StopWatchTime.Min;
  min.innerHTML = StopWatchTime.Begin;
  stopwatch.append(min);

  const colonTwo = document.createElement(Tags.Span);
  colonTwo.innerHTML = StopWatchTime.Separator;
  stopwatch.append(colonTwo);

  const sec = document.createElement(Tags.Span);
  sec.id = StopWatchTime.Sec;
  sec.innerHTML = StopWatchTime.Begin;
  stopwatch.append(sec);
};

interface IPeriod {
  hour: HTMLElement;
  min: HTMLElement;
  sec: HTMLElement;
}

export const getObjPeriod = function getObjTime(): IPeriod {
  const hour = <HTMLElement>document.getElementById(StopWatchTime.Hour);
  const min = <HTMLElement>document.getElementById(StopWatchTime.Min);
  const sec = <HTMLElement>document.getElementById(StopWatchTime.Sec);

  return {
    hour,
    min,
    sec,
  };
};

interface ITimeField {
  timeField: HTMLElement | null;
}

export const getObjTimeField = function getObjectTimeField(): ITimeField {
  const timeField = <HTMLElement>document.querySelector('.stopwatch');

  return {
    timeField,
  };
};
