/* exported swapChars */

function swapChars(firstIndex, secondIndex, string) {
  const string1 = string.slice(0, firstIndex);
  const string2 = string.slice(firstIndex + 1, secondIndex);
  const string3 = string.slice(secondIndex + 1);
  const answer =
    string1 + string[secondIndex] + string2 + string[firstIndex] + string3;

  return answer;
}
