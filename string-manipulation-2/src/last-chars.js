/* exported lastChars */

function lastChars(length, string) {
  let number = string.length - length;
  if (number < 0) {
    number = 0;
  }
  const last = string.slice(number, string.length);
  return last;
}
