/* exported isVowel */

function isVowel(char) {
  const low = char.toLowerCase();
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let i = 0;
  while (i < vowels.length) {
    if (low === vowels[i]) {
      return true;
    } else i++;
  } return false;
}
