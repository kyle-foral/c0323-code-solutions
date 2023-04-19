
const number = document.querySelector('.countdown-display');

let counter = 4;
function countdown() {
  if (counter > 0) {
    const boom = number.textContent = 'boom';
    return boom;
  } else {
    number.textContent = counter--;
  }clearInterval(interval);
}

const interval = setInterval(countdown, 1000);
