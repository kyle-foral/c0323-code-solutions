/* exported sumAll */

function sumAll(numbers) {
  let i = 0;
  let answer = 0;
  while (i < numbers.length) {
    answer += numbers[i];
    i++;
  } return answer;
}
