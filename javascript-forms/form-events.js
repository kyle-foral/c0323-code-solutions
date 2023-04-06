
function handleFocus(event) {
  console.log('focus event fired');
  console.log('event.target.name', event.target.name);
}

function handleBlur(event) {
  console.log('blur event fired');
  console.log('event.target.name', event.target.name);
}

function handleInput(event) {
  console.log('Value of name: ', event.target.value);
}

const names = document.querySelector('#user-name');
const emails = document.querySelector('#user-email');
const messages = document.querySelector('#user-message');

names.addEventListener('focus', handleFocus);
names.addEventListener('blur', handleBlur);
names.addEventListener('input', handleInput);

emails.addEventListener('focus', handleFocus);
emails.addEventListener('blur', handleBlur);
emails.addEventListener('input', handleInput);

messages.addEventListener('focus', handleFocus);
messages.addEventListener('blur', handleBlur);
messages.addEventListener('input', handleInput);
