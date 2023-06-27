/* exported isPalindromic */

function isPalindromic(string) {
  const kev = string.replaceAll(' ', '');
  let lay = '';
  for (let o = string.length - 1; o >= 0; o--) {
    if (string[o] === ' ') {
      continue;
    }
    lay += string[o];
  }
  if (kev === lay) {
    return true;
  } else {
    return false;
  }
}
