/* exported countdown */

function countdown(number) {
  const array = [];
  const i = 0;
  while (number >= i) {
    array.push(number);
    number--;
  } return array;
}
