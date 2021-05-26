const TIME_AFTER_WHICH_IN_GREEN = 1000;
const TIME_AFTER_WHICH_IN_RED = 500;
const TIME_AFTER_WHICH_TO_REMOVE_RED = 1520;

export function paintGreen(
  firstItem: HTMLElement | null,
  secondItem: HTMLElement,
): void {
  function workWithClassList(elem: HTMLElement): void {
    elem.classList.add('paint-green');
    elem.classList.remove('turn');
    elem.classList.add('turnface');
  }
  setTimeout(() => {
    if (firstItem) {
      workWithClassList(firstItem);
    }
    workWithClassList(secondItem);
  }, TIME_AFTER_WHICH_IN_GREEN);
}

export function paintRed(
  firstItem: HTMLElement | null,
  secondItem: HTMLElement,
): void {
  function addRedColor(elem: HTMLElement): void {
    elem.classList.add('paint-red');
  }
  function removeRedColor(elem: HTMLElement): void {
    elem.classList.remove('paint-red');
  }
  setTimeout(() => {
    if (firstItem) {
      addRedColor(firstItem);
    }
    addRedColor(secondItem);
  }, TIME_AFTER_WHICH_IN_RED);
  setTimeout(() => {
    if (firstItem) {
      removeRedColor(firstItem);
    }
    removeRedColor(secondItem);
  }, TIME_AFTER_WHICH_TO_REMOVE_RED);
}
