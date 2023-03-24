/* exported filterOutStrings */

function filterOutStrings(values) {
  const onlyNumbers = [];
  for (let i = 0; i < values.length; i++) {
    if (typeof values[i] !== 'string') {
      onlyNumbers.push(values[i]);
    }
  } return onlyNumbers;
}
