
const number = document.querySelector('.countdown-display');

let counter = 4;
function countdown() {
  const boom = number.textContent = 'boom';
  if (counter === -1) {
    return boom;
  } else {
    number.textContent = counter--;
  }clearInterval();
}

setInterval(countdown, 1000);
