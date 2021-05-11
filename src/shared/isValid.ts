export function isValidName(value: string): boolean {
  return /^[\p{L}\p{M}]{1,30}$/u.test(value);
}

export function isValidSurname(value: string): boolean {
  return /^[\p{L}\p{M}]{1,30}$/u.test(value);
}

export function isValidEmail(value: string): boolean {
  return /[\p{L}\p{M}0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[\p{L}\p{M}0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[\p{L}\p{M}0-9](?:[a-z0-9-]*[\p{L}\p{M}0-9])?\.)+(?:[A-Z]{2}|com|org|net|gov|mil|biz|info|mobi|name|aero|jobs|ru|by|museum)\b/u.test(
    value,
  );
}
