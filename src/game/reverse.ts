const TIME_AFTER_WHICH_TO_RUN_BACK = 1300;

export function reverseBack(arrCards: HTMLElement[]): void {
  setTimeout(() => {
    arrCards.forEach((item) => {
      item.classList.remove('turn');
    });
  }, TIME_AFTER_WHICH_TO_RUN_BACK);
}
