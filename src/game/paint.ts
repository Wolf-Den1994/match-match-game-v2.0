const TIME_AFTER_WHICH_IN_GREEN = 1000;
const TIME_AFTER_WHICH_IN_RED = 500;
const TIME_AFTER_WHICH_TO_REMOVE_RED = 1520;

export function paintGreen(
  firstItem: HTMLElement | null,
  secondItem: HTMLElement,
): void {
  setTimeout(() => {
    if (firstItem) {
      firstItem.classList.add('paint-green');
      firstItem.classList.remove('turn');
      firstItem.classList.add('turnface');
    }
    secondItem.classList.add('paint-green');
    secondItem.classList.remove('turn');
    secondItem.classList.add('turnface');
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
