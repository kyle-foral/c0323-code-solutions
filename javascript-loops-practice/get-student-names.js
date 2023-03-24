/* exported getStudentNames */

function getStudentNames(students) {
  const names = [];
  let i = 0;
  while (i < students.length) {
    names.push(students[i].name);
    i++;
  } return names;
}
