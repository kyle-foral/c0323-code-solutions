/* exported uniqueQuadratic, uniqueLinear */

function uniqueLinear(words) {
  const seen = {}; // 1 * 1 = O(1)
  const unique = []; // 1 * 1 = O(1)
  for (
    let i = 0; // 1 * 1 = O(1)
    i < words.length; // 2 * n = O(2n)
    i++ // 2 * n = O(2n)
  ) {
    const word = words[i]; // 1 * n = O(n)
    if (!seen[word]) {
      // 1 * n = O(n)
      seen[word] = true; // n * 1 = O(1)
      unique[unique.length] = word; // 2n * 1 = O(2n)
    }
  }
  return unique; // 1 * 1 = O(1)
} // Big O Notation for uniqueLinear: O(1)

function uniqueQuadratic(words) {
  const unique = []; // 1 * 1 = O(1)
  for (
    let i = 0; // 1 * 1 = O(1)
    i < words.length; // 2 * n = O(2n)
    i++ // 2 * n = O(2n)
  ) {
    const word = words[i]; // 1 * n = O(n)
    let isUnique = true; // 1 * 1 = O(1)
    for (
      let c = 0; // 1 * 1 = O(1)
      c < i; // 2 * n = O(2n)
      c++ // 2 * n = O(2n)
    ) {
      const comparing = words[c]; // 1 * 2n = O(2n)
      if (comparing === word) {
        // 1 * 1 = O(1)
        isUnique = false; // 1 * 1 = O(1)
      }
    }
    if (isUnique) {
      // 1 * 1 = O(1)
      unique[unique.length] = word; // 2n * 1 = O(2n)
    }
  }
  return unique; // 1 * 1 = O(1)
} // Big O Notation for uniqueQuadratic: O(n^2)
