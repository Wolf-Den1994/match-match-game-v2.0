export function reverseBack(arrCards: HTMLElement[]): void {
  setTimeout(() => {
    arrCards.forEach((item) => {
      item.classList.remove('turn');
    });
  }, 1300);
}
