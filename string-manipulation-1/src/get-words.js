/* exported getWords */

function getWords(string) {
  /* const empty = [];
  const final = string.split(' ');
  if (string == empty) {
    return empty;
  } else;
  return final; */
  if (string) {
    const final = string.split(' ');
    return final;
  }
  return [];
}
