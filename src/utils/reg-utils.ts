interface IElemsReg {
  userName: HTMLElement;
  userLastname: HTMLElement;
  userEmail: HTMLElement;
  imagesCheck: NodeListOf<HTMLElement>;
  ArrayImagesCheck: HTMLElement[];
  divItemInputs: NodeListOf<HTMLElement>;
  ArrayDivItemInputs: HTMLElement[];
}

export function getObjElemsRegister(): IElemsReg {
  const userName = <HTMLElement>document.getElementById('user-name');
  const userLastname = <HTMLElement>document.getElementById('user-lastname');
  const userEmail = <HTMLElement>document.getElementById('user-email');
  const imagesCheck: NodeListOf<HTMLElement> = document.querySelectorAll(
    '.img-check-register',
  );
  const ArrayImagesCheck: HTMLElement[] = Array.from(imagesCheck);
  const divItemInputs: NodeListOf<HTMLElement> = document.querySelectorAll(
    '.form-item-register',
  );
  const ArrayDivItemInputs: HTMLElement[] = Array.from(divItemInputs);

  return {
    userName,
    userLastname,
    userEmail,
    imagesCheck,
    ArrayImagesCheck,
    divItemInputs,
    ArrayDivItemInputs,
  };
}
