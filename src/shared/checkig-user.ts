import { isInputElement } from '../utils/errors';
import { getObjElemsRegister } from '../utils/reg-utils';
import { toNumber } from '../utils/toNumber';
import { isValidEmail, isValidName, isValidSurname } from './isValid';

const objElemsReg = getObjElemsRegister();
const MAX_LENGTH_EMAIL = 30;

export const checkingConditionValidName = function checkName(): boolean {
  if (!isInputElement(objElemsReg.userName)) return false;
  if (
    objElemsReg.userName.validity.valid &&
    isValidName(objElemsReg.userName.value) &&
    Number.isNaN(toNumber(objElemsReg.userName.value))
  ) {
    return true;
  }
  return false;
};

export const checkingConditionValidSurname = function checkSurname(): boolean {
  if (!isInputElement(objElemsReg.userLastname)) return false;
  if (
    objElemsReg.userLastname.validity.valid &&
    isValidSurname(objElemsReg.userLastname.value) &&
    Number.isNaN(toNumber(objElemsReg.userLastname.value))
  ) {
    return true;
  }
  return false;
};

export const checkingConditionValidEmail = function checkEmail(): boolean {
  if (!isInputElement(objElemsReg.userEmail)) return false;
  if (
    objElemsReg.userEmail.validity.valid &&
    isValidEmail(objElemsReg.userEmail.value) &&
    objElemsReg.userEmail.value.length <= MAX_LENGTH_EMAIL
  ) {
    return true;
  }
  return false;
};
