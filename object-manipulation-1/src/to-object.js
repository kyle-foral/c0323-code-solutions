/* exported toObject */

function toObject(keyValuePair) {
  const first = keyValuePair[0];
  const second = keyValuePair[1];
  const final = { [first]: second };
  return final;
}
