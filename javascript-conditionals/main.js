/* exported isUnderFive,
            isEven,
            startsWithJ,
            isOldEnoughToDrink,
            isOldEnoughToDrive,
            isOldEnoughToDrinkAndDrive,
            categorizeAcidity,
            introduceWarnerBro,
            recommendMovie
 */

function isUnderFive(number) {
  if (number < 5) {
    return true;
  } else {
    return false;
  }
}
console.log('Is Under 5? ', isUnderFive(3));

function isEven(number) {
  // const answer = number / 2;
  if (number % 2 === 0) {
    return true;
  } else {
    return false;
  }
}
console.log('Is Even? ', isEven(6));

function startsWithJ(string) {
  if (string[0] === 'J') {
    return true;
  } else { return false; }
}
console.log('Starts with J ', startsWithJ('Cat'));

function isOldEnoughToDrink(person) {
  const Brad = {
    age: 25,
    name: 'Brad Long'
  };
  const over = Brad.age;
  if (over > 21) {
    return true;
  } else { return false; }
}
console.log('Is person old enough to drink? ', isOldEnoughToDrink());

function isOldEnoughToDrive(person) {
  const Homer = {
    name: 'Homer Simpson',
    age: 30
  };
  const old = Homer.age;
  if (old > 16) {
    return true;
  } else { return false; }
}
console.log('Is old enough to drive ', isOldEnoughToDrive());

function isOldEnoughToDrinkAndDrive(person) {
  const Homer = {
    name: 'Homer Simpson',
    age: 1
  };
  const nogo = Homer.age;
  if (nogo < 10) {
    return false;
  } else { return true; }
}
console.log('Old enough to drink and drive? ', isOldEnoughToDrinkAndDrive());

function categorizeAcidity(pH) {
  if (pH === 7) {
    return 'neutral';
  } else if (pH < 7 && pH > 0) {
    return 'acid';
  } else if (pH > 7 && pH < 14) {
    return 'base';
  } else { return 'invalid PH level'; }
}
console.log('What is the pH level? ', categorizeAcidity(3));

function introduceWarnerBro(name) {
  switch (name) {
    case 'yakko':
      return "We're the warner brothers!";
      // break
    case 'wakko':
      return "We're the warner brothers!";
      // break
    case 'dot':
      return "I'm cute";
      // break
    default:
      return 'Goodnight everybody';
  }
}
console.log('Introduce the Warner Bros: ', introduceWarnerBro('dot'));

function recommendMovie(genre) {
  switch (genre) {
    case 'action':
      return 'Die Hard';
      // break
    case 'comedy':
      return 'The Big Lebowski';
      // break
    case 'horror':
      return 'Lights Out';
      // break
    case 'drama':
      return 'The Unforgivable';
      // break
    case 'musical':
      return 'Babylon';
      // break
    case 'sci-fi':
      return 'Moonfall';
      // break
    default:
      return 'Genre not recognized. Choose between action, comedy, horror, drama, musical, and sci-fi';
  }
}
console.log('Movie ', recommendMovie('comedy'));
