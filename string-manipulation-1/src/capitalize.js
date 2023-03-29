/* exported capitalize */

function capitalize(word) {
  const low = word.toLowerCase();
  const cap = low[0].toUpperCase();
  const cut = low.slice(1);
  const final = cap + cut;
  return final;
}
//
