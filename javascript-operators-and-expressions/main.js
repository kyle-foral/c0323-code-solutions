const width = 10;
const height = 3;
const area = width * height;
console.log('The value of area ', area);
console.log('The type of area ', typeof area);

const bill = 5;
const payment = 7;
const change = payment - bill;
console.log('The value of change ', change);
console.log('The type of change ', typeof change);

const quizzes = 5;
const midterm = 10;
const final = 12;
const grade = (quizzes + midterm + final) / 3;
console.log('The value of grade ', grade);
console.log('The type of grade ', typeof grade);

const firstName = 'Kyle';
const lastName = 'Foral';
const fullName = firstName + ' ' + lastName;
console.log('The value of fullName ', fullName);
console.log('The type of fullName', typeof fullName);

const pH = 1;
const isAcidic = pH < 7;
console.log('The value of isAcidic ', isAcidic);
console.log('The type of isAcidic ', typeof isAcidic);

const headCount = 200;
const isSparta = headCount === 300;
console.log('The value of isSparta ', isSparta);
console.log('The type of isSparta ', typeof isSparta);

let motto = fullName;
motto += ' is the GOAT';
console.log('The value of motto ', motto);
console.log('The type of motto ', typeof motto);
