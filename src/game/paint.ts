import { addClassList } from '../utils/add-class';
import { PAINT_GREEN, PAINT_RED, TURN } from '../utils/consts';
import { removeClassList } from '../utils/remove-class';

const TIME_AFTER_WHICH_IN_GREEN = 1000;
const TIME_AFTER_WHICH_IN_RED = 500;
const TIME_AFTER_WHICH_TO_REMOVE_RED = 1520;

export function paintGreen(
  firstItem: HTMLElement | null,
  secondItem: HTMLElement,
): void {
  function workWithClassList(elem: HTMLElement): void {
    addClassList(elem, PAINT_GREEN);
    removeClassList(elem, TURN);
    addClassList(elem, 'turnface');
  }
  setTimeout(() => {
    if (firstItem) {
      workWithClassList(firstItem);
    }
    workWithClassList(secondItem);
  }, TIME_AFTER_WHICH_IN_GREEN);
}

export function paintRed(
  firstItem: HTMLElement | null,
  secondItem: HTMLElement,
): void {
  function addRedColor(elem: HTMLElement): void {
    addClassList(elem, PAINT_RED);
  }
  function removeRedColor(elem: HTMLElement): void {
    removeClassList(elem, PAINT_RED);
  }
  setTimeout(() => {
    if (firstItem) {
      addRedColor(firstItem);
    }
    addRedColor(secondItem);
  }, TIME_AFTER_WHICH_IN_RED);
  setTimeout(() => {
    if (firstItem) {
      removeRedColor(firstItem);
    }
    removeRedColor(secondItem);
  }, TIME_AFTER_WHICH_TO_REMOVE_RED);
}
