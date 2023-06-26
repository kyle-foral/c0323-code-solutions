/* exported omit */

function omit(source, keys) {
  const newObject = {};
  for (const key of Object.keys(source)) {
    if (!keys.includes(key)) {
      newObject[key] = source[key];
    }
  }
  return newObject;
}
