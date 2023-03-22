/* exported getDescriptionOfPerson */
function getDescriptionOfPerson(person) {
  const i = person.name + ' is a ' + person.occupation + ' from ' + person.birthPlace + '.';
  return i;
}
