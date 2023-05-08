const colors = ['red', 'white', 'blue'];
console.log('Value of colors[0] ', colors[0]);
console.log('Value of colors[1] ', colors[1]);
console.log('Value of colors[2] ', colors[2]);

const america =
  'America is ' + colors[0] + ', ' + colors[1] + ', and ' + colors[2] + '.';
console.log(america);

colors[2] = 'green';
const mexico =
  'Mexico is ' + colors[0] + ', ' + colors[1] + ', and ' + colors[2] + '.';
console.log(mexico);

console.log('Value of colors ', colors);

const students = ['Chase', 'Kaine', 'Spencer', 'Cameron'];
const numberOfStudents = students.length;

console.log('There are ' + numberOfStudents + ' students in the class.');

const lastIndex = numberOfStudents - 1;
const lastStudent = students[lastIndex];
console.log('The last student in the array is', lastStudent);

console.log('Value of students ', students);
