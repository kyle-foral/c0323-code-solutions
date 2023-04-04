let number = 0;

const lightswitch = document.querySelector('.button');

const room = document.querySelector('.container');

lightswitch.addEventListener('click', flipped);

function flipped(event) {
  number++;
  if (number % 2 === 0) {
    lightswitch.setAttribute('class', 'button on', 'container on');
    room.setAttribute('class', 'container on');
  } else {
    lightswitch.setAttribute('class', 'button off', 'container off');
    room.setAttribute('class', 'container off');
  }
}
