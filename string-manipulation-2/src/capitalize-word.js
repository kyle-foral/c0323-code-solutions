/* exported capitalizeWord */

function capitalizeWord(word) {
  const low = word.toLowerCase();
  const cap = low[0].toUpperCase();
  const cut = low.slice(1);
  const final = cap + cut;
  if (low === 'javascript') {
    return 'JavaScript';
  }
  return final;
}
