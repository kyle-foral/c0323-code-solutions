/* exported numVowels */

function numVowels(string) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let number = 0;
  const lower = string.toLowerCase();
  for (let i = 0; i < lower.length; i++) {
    for (let j = 0; j < vowels.length; j++) {
      if (lower[i] === vowels[j]) {
        number++;
      }
    }
  }
  return number;
}
