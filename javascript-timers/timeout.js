
const message = document.querySelector('.message');

function change() {
  message.textContent = 'Hello there.';
  return message;
}

setTimeout(change, 2000);
