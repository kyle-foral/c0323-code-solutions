/* exported reverseWords */

function reverseWords(string) {
  const kev = string.split(' ');
  let lay = '';
  for (let i = 0; i < kev.length; i++) {
    for (let o = kev[i].length - 1; o >= 0; o--) {
      lay += kev[i][o];
    }
    if (lay.length < string.length) {
      lay += ' ';
    }
  }
  return lay;
}
