/* exported addSuffixToAll */

function addSuffixToAll(words, suffix) {
  const newWords = [];
  let i = 0;
  while (i < words.length) {
    newWords.push(words[i] + suffix);
    i++;
  } return newWords;
}
