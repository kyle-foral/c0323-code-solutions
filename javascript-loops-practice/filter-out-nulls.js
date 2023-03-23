/* exported filterOutNulls */

function filterOutNulls(values) {
  // debugger;
  const newArray = [];
  for (let i = 0; i < values.length; i++) {
    if (values[i] == null);
    else {
      newArray.push(values[i]);
    }
  } return newArray;
}
