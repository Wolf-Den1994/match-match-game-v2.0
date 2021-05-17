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
  }, 1000);
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
  }, 500);
  setTimeout(() => {
    if (firstItem) {
      firstItem.classList.remove('paint-red');
    }
    secondItem.classList.remove('paint-red');
  }, 1520);
}
