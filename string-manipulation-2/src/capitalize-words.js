/* exported capitalizeWords */

function capitalizeWords(string) {
  const answer = [];
  const newArray = string.split(' ');
  for (let i = 0; i < newArray.length; i++) {
    answer.push(
      newArray[i][0].toUpperCase() + newArray[i].slice(1).toLowerCase()
    );
  }
  const answer2 = answer.join(' ');
  return answer2;
}
