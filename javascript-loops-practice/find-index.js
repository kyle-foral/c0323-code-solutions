/* exported findIndex */

function findIndex(array, value) {
  // debugger;
  const notFound = -1;
  for (let i = 0; i < array.length; i++) {
    if (value === array[i]) {
      return i;
    }
  } return notFound;
}
