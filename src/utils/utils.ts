export const cardDivs = document.getElementsByClassName('card');
export const frontDivs = document.getElementsByClassName('front');
export const backDivs = document.getElementsByClassName('back');

export const arrCards: HTMLElement[] = Array.prototype.slice.call(cardDivs);
export const arrFrontDivs: HTMLElement[] = Array.prototype.slice.call(
  frontDivs,
);
export const arrBackDivs: HTMLElement[] = Array.prototype.slice.call(backDivs);
