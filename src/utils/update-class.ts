export const updateClassList = (
  elemToAddClass: HTMLButtonElement,
  elemToRemoveClass: HTMLButtonElement,
  elemClass: string,
): void => {
  elemToAddClass.classList.add(elemClass);
  elemToRemoveClass.classList.remove(elemClass);
};
