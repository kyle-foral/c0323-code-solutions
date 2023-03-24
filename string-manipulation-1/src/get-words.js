/* exported getWords */

function getWords(string) {
  if (string) {
    const final = string.split(' ');
    return final;
  }
  return [];
}
