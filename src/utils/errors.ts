export const isNotFound = function isNotFoundElement(): string {
  return 'is not found';
};

export const isInputElement = function inputElement(
  elem: HTMLElement | null,
): elem is HTMLInputElement {
  if (!elem) throw new Error(`Element ${isNotFound()}`);
  return elem.tagName === 'INPUT';
};
