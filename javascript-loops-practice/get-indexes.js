/* exported getIndexes */

function getIndexes(array) {
  const newArray = [];
  let i = 0;
  while (i < array.length) {
    newArray.push(i);
    i++;
  } return newArray;
}
