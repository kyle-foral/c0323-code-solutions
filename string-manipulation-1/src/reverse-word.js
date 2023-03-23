/* exported reverseWord */

function reverseWord(word) {
  let backwards = [];
  for (let i = word.length - 1; i >= 0; i--) {
    backwards += word[i];
  } return backwards;
}
