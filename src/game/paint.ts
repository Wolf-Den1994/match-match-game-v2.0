const TIME_AFTER_WHICH_IN_GREEN = 1000;
const TIME_AFTER_WHICH_IN_RED = 500;
const TIME_AFTER_WHICH_TO_REMOVE_RED = 1520;

export function paintGreen(
  firstItem: HTMLElement | null,
  secondItem: HTMLElement,
): void {
  function workWithClassList(item: HTMLElement): void {
    item.classList.add('paint-green');
    item.classList.remove('turn');
    item.classList.add('turnface');
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
  setTimeout(() => {
    if (firstItem) {
      firstItem.classList.add('paint-red');
    }
    secondItem.classList.add('paint-red');
  }, TIME_AFTER_WHICH_IN_RED);
  setTimeout(() => {
    if (firstItem) {
      firstItem.classList.remove('paint-red');
    }
    secondItem.classList.remove('paint-red');
  }, TIME_AFTER_WHICH_TO_REMOVE_RED);
}
