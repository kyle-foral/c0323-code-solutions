/* exported ransomCase */

function ransomCase(string) {
  for (let i = 0; i < string.length; i++) {
    if (i % 2 === 0) {
      string.toLowerCase([i]);
    } else string[i].toUpperCase();
  }
  return string;
}
