/* exported filterOutStrings */

function filterOutStrings(values) {
  // debugger;
  const onlyNumbers = [];
  for (let i = 0; i < values.length; i++) {
    if (typeof values[i] !== 'string') {
      onlyNumbers.push(values[i]);
    } else;
  } return onlyNumbers;
}
