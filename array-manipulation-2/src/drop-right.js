/* exported dropRight */

function dropRight(array, count) {
  const newArray = [];
  const test = array.length - count;
  for (let i = 0; i < test; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}
