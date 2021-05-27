export const cardDivs = document.getElementsByClassName('card');
export const frontDivs = document.getElementsByClassName('front');
export const backDivs = document.getElementsByClassName('back');

interface IArrsCard {
  arrCards: HTMLElement[];
  arrFrontDivs: HTMLElement[];
  arrBackDivs: HTMLElement[];
}

export function getObjArrsCard(): IArrsCard {
  const arrCards: HTMLElement[] = Array.prototype.slice.call(cardDivs);
  const arrFrontDivs: HTMLElement[] = Array.prototype.slice.call(frontDivs);
  const arrBackDivs: HTMLElement[] = Array.prototype.slice.call(backDivs);

  return {
    arrCards,
    arrFrontDivs,
    arrBackDivs,
  };
}
