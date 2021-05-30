export const isInputElement = function inputElement(
  elem: HTMLElement | null,
): elem is HTMLInputElement {
  if (!elem) throw new Error('Element is not found');
  return elem.tagName === 'INPUT';
};
