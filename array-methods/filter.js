const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const names = [
  'Ada',
  'Hedy',
  'Jean',
  'Grace',
  'Evelyn',
  'Joan',
  'Elizabeth',
  'Janese',
  'Donna',
];

const result = numbers.filter((numbers) => numbers % 2 === 0);
console.log('even numbers', result);

const strings = names.filter((names) => !names.toLowerCase().includes('d'));
console.log('names with no d', strings);
