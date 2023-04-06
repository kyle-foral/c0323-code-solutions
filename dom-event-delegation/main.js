const taskList = document.querySelector('.task-list');

taskList.addEventListener('click', names);

function names(event) {
  console.log('event.target', event.target);
  console.log('event.target.tagName', event.target.tagName);

  if (event.target.matches('button')) {
    console.log('event closest', event.target.closest('.task-list-item'));
    const listItem = event.target.closest('.task-list-item');
    listItem.remove();
  }
}
