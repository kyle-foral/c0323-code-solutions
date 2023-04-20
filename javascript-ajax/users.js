const $userList = document.querySelector('#user-list');

const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
xhr.responseType = 'json';

xhr.addEventListener('load', info);

function info() {
  console.log(xhr.status);
  console.log(xhr.response);
  for (let i = 0; i < xhr.response.length; i++) {
    const name = document.createElement('li');
    name.textContent = xhr.response[i].name;
    $userList.appendChild(name);
  }
} xhr.send();
