function convertMinutesToSeconds(minutes) {
  const seconds = minutes * 60;
  return seconds;
}
console.log('Total number of seconds ', convertMinutesToSeconds(5));

function greet(name) {
  const hello = 'Hey, ' + name;
  return hello;
}
console.log(greet('Beavis'));

function getArea(width, height) {
  const area = width * height;
  return area;
}
console.log(getArea(17, 42));

function getFirstName(person) {
  const name = person.firstName;
  return name;
}
console.log(getFirstName({ firstName: 'Lelouche', lastName: 'Lamperouge' }));

function getLastElement(array) {
  const spot = array.length - 1;
  const last = array[spot];
  return last;
}
console.log(getLastElement(['propane', 'and', 'propane', 'accessories']));
