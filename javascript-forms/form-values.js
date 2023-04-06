
const formId = document.querySelector('#contact-form');

formId.addEventListener('submit', stopped);

function stopped(event) {
  event.preventDefault();
  const messageData = {
    name: formId.elements.name.value,
    email: formId.elements.email.value,
    message: formId.elements.message.value
  };
  console.log('messageData', messageData);
  formId.reset();
}
