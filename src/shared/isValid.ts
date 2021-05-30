export const isValidName = function isValidNameUser(value: string): boolean {
  return /^[\p{L}\p{M}\d ]{1,30}$/u.test(value);
};

export const isValidSurname = function isValidSurnameUser(
  value: string,
): boolean {
  return /^[\p{L}\p{M}\d ]{1,30}$/u.test(value);
};

export const isValidEmail = function isValidEmailUser(value: string): boolean {
  return /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+(?:[A-Z]{2}|com|org|net|gov|mil|biz|info|mobi|name|aero|jobs|ru|by|museum)\b/.test(
    value,
  );
};
