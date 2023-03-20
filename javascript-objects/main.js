const student = {
  firstName: 'Kyle',
  lastName: 'Foral',
  age: 26
};
const fullName = student.firstName + ' ' + student.lastName;
console.log('The value of fullName ', fullName);

student.livesInIrvine = false;
student.previousOccupation = 'Solar Installer';

console.log('The value of livesInIrvine ', student.livesInIrvine);
console.log('The value of previousOccupation ', student.previousOccupation);
console.log('The value of student ', student);

const vehicle = {
  make: 'Honda',
  model: 'Civic',
  year: 2019
};
vehicle['color'] = 'Dark Grey';
console.log('The color of the vehicle ', vehicle['color']);

vehicle['isConvertible'] = false;
console.log('The vehicle isConvertible ', vehicle['isConvertible']);

console.log('The object vehicle ', vehicle);

const pet = {
  name: 'Roger',
  type: 'Dog'
};

delete pet.name;
delete pet.type;

console.log('The pet ', pet);
