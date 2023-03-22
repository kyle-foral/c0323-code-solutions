/* exported getInitialsOfPerson */
function getInitialsOfPerson(person) {
  const a = person.firstName[0];
  const b = person.lastName[0];
  const c = a + b;
  return c;
}
