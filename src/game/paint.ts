import { addClassList } from '../utils/add-class';
import { ElemClasses } from '../utils/enum';
import { removeClassList } from '../utils/remove-class';

const TIME_AFTER_WHICH_IN_GREEN = 1000;
const TIME_AFTER_WHICH_IN_RED = 500;
const TIME_AFTER_WHICH_TO_REMOVE_RED = 1520;

export const paintGreen = function changePaintGreen(
  firstItem: HTMLElement | null,
  secondItem: HTMLElement,
): void {
  function workWithClassList(elem: HTMLElement): void {
    addClassList(elem, ElemClasses.PAINT_CORRECT);
    removeClassList(elem, ElemClasses.TURN);
    addClassList(elem, 'turnface');
  }
  setTimeout(() => {
    if (firstItem) {
      workWithClassList(firstItem);
    }
    workWithClassList(secondItem);
  }, TIME_AFTER_WHICH_IN_GREEN);
};

export const paintRed = function changePaintRed(
  firstItem: HTMLElement | null,
  secondItem: HTMLElement,
): void {
  function addRedColor(elem: HTMLElement): void {
    addClassList(elem, ElemClasses.PAINT_WRONG);
  }
  function removeRedColor(elem: HTMLElement): void {
    removeClassList(elem, ElemClasses.PAINT_WRONG);
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
};
