let number = 0;

const butt = document.querySelector('.hot-button');

const clicks = document.querySelector('.click-count');

butt.addEventListener('click', timesclicked);

function timesclicked() {
  number++;
  clicks.textContent = 'Clicks: ' + number;
  if (number < 4) {
    butt.setAttribute('class', 'hot-button cold');
  } else if (number < 7) {
    butt.setAttribute('class', 'hot-button cool');
  } else if (number < 10) {
    butt.setAttribute('class', 'hot-button tepid');
  } else if (number < 13) {
    butt.setAttribute('class', 'hot-button warm');
  } else if (number < 16) {
    butt.setAttribute('class', 'hot-button hot');
  } else {
    butt.setAttribute('class', 'hot-button nuclear');
    number = 0;
  }
}
