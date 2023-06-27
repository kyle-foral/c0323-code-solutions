/* exported isAnagram */

function isAnagram(firstString, secondString) {
  const stringOnePrep = firstString.split(' ');
  const stringTwoPrep = secondString.split(' ');
  const stringOne = stringOnePrep.join('');
  const stringTwo = stringTwoPrep.join('');
  const splitOne = stringOne.split('');
  const splitTwo = stringTwo.split('');
  const orderOne = splitOne.sort();
  const orderTwo = splitTwo.sort();
  const finalOne = orderOne.join('');
  const finalTwo = orderTwo.join('');
  if (finalOne === finalTwo) {
    return true;
  } else {
    return false;
  }
}
