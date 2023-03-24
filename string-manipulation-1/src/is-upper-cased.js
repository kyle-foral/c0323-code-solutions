/* exported isUpperCased */

function isUpperCased(word) {
  const up = word.toUpperCase();
  if (word === up) {
    return true;
  } else {
    return false;
  }
}
