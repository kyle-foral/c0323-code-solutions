const first = 10;
const second = 30;
const third = 15;
const maximumValue = Math.max(first, second, third);
console.log('Maximum value ', maximumValue);

const heros = ['superman', 'batman', 'aquaman', 'spiderman'];
let randomNumber = Math.random();
randomNumber *= heros.length;
const randomIndex = Math.floor(randomNumber);
console.log('Random Index ', randomIndex);
const randomHero = heros[randomIndex];
console.log('Random Hero ', randomHero);

const library = [
  {
    title: 'Harry Potter',
    author: 'J.K Rowling'
  },
  {
    title: 'Star Wars',
    author: 'George Lucas'
  },
  {
    title: 'Game of Thrones',
    author: 'George R.R. Martin'
  }
];
const lastBook = library.pop();
console.log('Last Book ', lastBook);
const firstBook = library.shift();
console.log('First Book ', firstBook);
const catBook = {
  title: 'Green Eggs and Ham',
  author: 'Dr. Seuss'
};
const waterbook = {
  title: 'Moby Dick',
  author: 'Herman Melville'
};
library.push(catBook);
library.unshift(waterbook);
library.splice(1, 1);
console.log('Library ', library);

const fullName = 'Kyle Foral';
const firstAndLastName = fullName.split(' ');
console.log('First and Last name ', firstAndLastName);
const firstName = firstAndLastName[0];
const sayMyName = firstName.toUpperCase();
console.log('Say my name ', sayMyName);
