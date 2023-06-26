/* exported invert */

function invert(source) {
  const newObject = {};
  for (const [key, value] of Object.entries(source)) {
    newObject[value] = key;
  }
  return newObject;
}
