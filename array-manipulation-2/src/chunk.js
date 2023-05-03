/* exported chunk */

function chunk(array, size) {

  const returnArray = [];
  for (let i = 0; i < array.length; i += size) {
    const newArray = [];
    for (let j = 0; j < size; j++) {
      if (i + j < array.length) {
        newArray.push(array[i + j]);
      }
    }
    returnArray.push(newArray);
  }
  return returnArray;
}
