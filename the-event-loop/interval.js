let counter = 3;

function countdown() {
  console.log(counter);
  counter--;
  if (counter === 0) {
    console.log('Blast off');
    clearInterval(interval);
  }
}
const interval = setInterval(countdown, 1000);
