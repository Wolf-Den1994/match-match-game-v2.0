export function isValidName(value: string): boolean {
  return /^[\p{L}\p{M}\d ]{1,30}$/u.test(value);
}

export function isValidSurname(value: string): boolean {
  return /^[\p{L}\p{M}\d ]{1,30}$/u.test(value);
}

export function isValidEmail(value: string): boolean {
  return /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+(?:[A-Z]{2}|com|org|net|gov|mil|biz|info|mobi|name|aero|jobs|ru|by|museum)\b/.test(
    value,
  );
}
