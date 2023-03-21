const colors = ['red', 'white', 'blue'];
console.log('Value of colors[0] ', colors[0]);
console.log('Value of colors[1] ', colors[1]);
console.log('Value of colors[2] ', colors[2]);

const America = 'America is ' + colors[0] + ', ' + colors[1] + ', ' + colors[2] + '.';
console.log(America);

colors[2] = 'green';
const Mexico = 'Mexico is ' + colors[0] + ', ' + colors[1] + ', ' + colors[2] + '.';
console.log(Mexico);

console.log('Value of colors ', colors);

const students = ['Chase', 'Kaine', 'Spencer', 'Cameron'];
const numberOfStudents = students.length;

console.log('There are ', numberOfStudents, ' students in the class.');

const lastIndex = numberOfStudents - 1;
const lastStudent = students[lastIndex];
console.log('The last student in class is ', lastStudent);

console.log('Value of students ', students);
