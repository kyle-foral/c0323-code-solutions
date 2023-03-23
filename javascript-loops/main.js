/* exported getNumbersToTen,
            getEvenNumbersToTwenty,
            repeatWord,
            logEachCharacter,
            doubleAll,
            getKeys,
            getValues
 */

function getNumbersToTen() {
  const numbers = [];
  let currentNumber = 1;
  while (currentNumber <= 10) {
    numbers.push(currentNumber);
    currentNumber++;
  } return numbers;
}
console.log('Numbers to ten ', getNumbersToTen());

function getEvenNumbersToTwenty() {
  const evenNumbers = [];
  let currentNumber = 2;
  while (currentNumber <= 20) {
    evenNumbers.push(currentNumber);
    currentNumber += 2;
  } return evenNumbers;
}
console.log('Get even numbers to twenty ', getEvenNumbersToTwenty());

function repeatWord(word, times) {
  let count = 1;
  let repeated = ' ';
  while (count < times) {
    repeated += word;
    count++;
  } return repeated;
}
console.log('Word repeated ', repeatWord('javascript', 30));

function logEachCharacter(string) {
  for (let i = 0; i < string.length; i++) {
    console.log(string[i]);
  }
}

function doubleAll(numbers) {
  const doubled = [];
  for (let i = 0; i < numbers.length; i++) {
    doubled.push(numbers[i] * 2);
  } return doubled;
}

function getKeys(object) {
  const keys = [];
  let key = object.key;
  for (key in object) {
    keys.push(key);
  } return keys;
}

function getValues(object) {
  const values = [];
  let key = object.key;
  for (key in object) {
    values.push(object[key]);
  } return values;
}
