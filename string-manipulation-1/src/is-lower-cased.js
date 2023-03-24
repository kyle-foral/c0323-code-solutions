/* exported isLowerCased */

function isLowerCased(word) {
  const low = word.toLowerCase();
  if (word === low) {
    return true;
  } else {
    return false;
  }
}
