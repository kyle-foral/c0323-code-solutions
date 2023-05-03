/* exported takeRight */

function takeRight(array, count) {
  const newArray = [];
  if (count > array) {
    return array;
  } else {
    for (let i = count; i < array.length; i++) {
      newArray.push(array[i]);
    }
    return newArray;
  }
}
