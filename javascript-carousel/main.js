const bulb = document.querySelector('.bulb');
const char = document.querySelector('.char');
const squirt = document.querySelector('.squirt');
const pikachu = document.querySelector('.pikachu');
const jiggly = document.querySelector('.jiggly');

const pokes = document.querySelectorAll('img');
console.log('pokemon', pokes.length);

// char.className = 'char hidden';
// squirt.className = 'squirt hidden';
// pikachu.className = 'pikachu hidden';
// jiggly.className = 'jiggly hidden';

pokes.className = ('pokemon hidden');

// const one = document.querySelector('.one');
// const two = document.querySelector('.two');
// const three = document.querySelector('.three');
// const four = document.querySelector('.four');
// const five = document.querySelector('.five');

// one.className = 'one black';

// const next = document.querySelector('#next');
// const previous = document.querySelector('#previous');

const intervalId = null;

function swap() {
  for (let counter = 0; counter < pokes.length; counter++) {
    if (counter === 0) {
      bulb.className = pokes[0] === 'bulb show';
    } else if (counter === 1) {
      char.className = pokes[1] === 'char show';
    } else if (counter === 2) {
      squirt.className = pokes[2] === 'squirt show';
    } else if (counter === 3) {
      pikachu.className = pokes[3] === 'pikachu show';
    } else if (counter === 4) {
      jiggly.className = pokes[4] === 'jiggly show';
    }
  } clearInterval(intervalId);
}

setInterval(swap, 3000);
// function pokemon() {
//   counter++;
//   if (counter === 0) {
//     clearInterval(intervalId);
//     bulb.className = 'bulb show';
//     char.className = 'char hidden';
//     squirt.className = 'squirt hidden';
//     pikachu.className = 'pikachu hidden';
//     jiggly.className = 'jiggly hidden';
//     one.className = 'one black';
//     two.className = 'two white';
//     three.className = 'three white';
//     four.className = 'four white';
//     five.className = 'five white';
//   } else if (counter === 1) {
//     clearInterval(intervalId);
//     bulb.className = 'bulb hidden';
//     char.className = 'char show';
//     squirt.className = 'squirt hidden';
//     pikachu.className = 'pikachu hidden';
//     jiggly.className = 'jiggly hidden';
//     two.className = 'two black';
//     one.className = 'one white';
//     three.className = 'three white';
//     four.className = 'four white';
//     five.className = 'five white';
//   } else if (counter === 2) {
//     clearInterval(intervalId);
//     bulb.className = 'bulb hidden';
//     char.className = 'char hidden';
//     squirt.className = 'squirt show';
//     pikachu.className = 'pikachu hidden';
//     jiggly.className = 'jiggly hidden';
//     three.className = 'three black';
//     one.className = 'one white';
//     two.className = 'two white';
//     four.className = 'four white';
//     five.className = 'five white';
//   } else if (counter === 3) {
//     clearInterval(intervalId);
//     bulb.className = 'bulb hidden';
//     char.className = 'char hidden';
//     squirt.className = 'squirt hidden';
//     pikachu.className = 'pikachu show';
//     jiggly.className = 'jiggly hidden';
//     four.className = 'four black';
//     one.className = 'one white';
//     two.className = 'two white';
//     three.className = 'three white';
//     five.className = 'five white';
//   } else if (counter === 4) {
//     clearInterval(intervalId);
//     bulb.className = 'bulb hidden';
//     char.className = 'char hidden';
//     squirt.className = 'squirt hidden';
//     pikachu.className = 'pikachu hidden';
//     jiggly.className = 'jiggly show';
//     five.className = 'five black';
//     one.className = 'one white';
//     two.className = 'two white';
//     three.className = 'three white';
//     four.className = 'four white';
//   } else {
//     counter = 0;
//     clearInterval(intervalId);
//   }
// }

// one.addEventListener('click', function () {
//   clearInterval(intervalId);
//   one = counter = 0;
//   bulb.className = 'bulb show';
//   char.className = 'char hidden';
//   squirt.className = 'squirt hidden';
//   pikachu.className = 'pikachu hidden';
//   jiggly.className = 'jiggly hidden';
//   one.className = 'one black';
//   two.className = 'two white';
//   three.className = 'three white';
//   four.className = 'four white';
//   five.className = 'five white';
// });

// two.addEventListener('click', function () {
//   clearInterval(intervalId);
//   two = counter = 1;
//   bulb.className = 'bulb hidden';
//   char.className = 'char show';
//   squirt.className = 'squirt hidden';
//   pikachu.className = 'pikachu hidden';
//   jiggly.className = 'jiggly hidden';
//   two.className = 'two black';
//   one.className = 'one white';
//   three.className = 'three white';
//   four.className = 'four white';
//   five.className = 'five white';
// });

// three.addEventListener('click', function () {
//   clearInterval(intervalId);
//   three = counter = 2;
//   bulb.className = 'bulb hidden';
//   char.className = 'char hidden';
//   squirt.className = 'squirt show';
//   pikachu.className = 'pikachu hidden';
//   jiggly.className = 'jiggly hidden';
//   three.className = 'three black';
//   one.className = 'one white';
//   two.className = 'two white';
//   four.className = 'four white';
//   five.className = 'five white';
// });

// four.addEventListener('click', function () {
//   clearInterval(intervalId);
//   four = counter = 3;
//   bulb.className = 'bulb hidden';
//   char.className = 'char hidden';
//   squirt.className = 'squirt hidden';
//   pikachu.className = 'pikachu show';
//   jiggly.className = 'jiggly hidden';
//   four.className = 'four black';
//   one.className = 'one white';
//   two.className = 'two white';
//   three.className = 'three white';
//   five.className = 'five white';
// });

// five.addEventListener('click', function () {
//   clearInterval(intervalId);
//   five = counter = 4;
//   bulb.className = 'bulb hidden';
//   char.className = 'char hidden';
//   squirt.className = 'squirt hidden';
//   pikachu.className = 'pikachu hidden';
//   jiggly.className = 'jiggly show';
//   five.className = 'five black';
//   one.className = 'one white';
//   two.className = 'two white';
//   three.className = 'three white';
//   four.className = 'four white';
// });

// next.addEventListener('click', function () {
//   clearInterval(intervalId);
//   pokemon();
//   clearInterval(intervalId);
// });

// previous.addEventListener('click', function () {
//   clearInterval(intervalId);
//   pokemon();
//   clearInterval(intervalId);
// });
