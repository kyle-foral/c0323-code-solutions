/* exported takeRight */

function takeRight(array, count) {
  const newArray = [];
  const test = array.length - count;
  if (count > array.length) {
    return array;
  } else {
    for (let i = test; i < array.length; i++) {
      newArray.push(array[i]);
    }
    return newArray;
  }
}
