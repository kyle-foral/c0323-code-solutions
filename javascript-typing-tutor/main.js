const words = document.querySelectorAll('span');

let counter = 0;

function typed(event) {
  if (event.key === words[counter].textContent) {
    words[counter].setAttribute('class', 'span correct');
    counter += 1;
    words[counter].setAttribute('class', 'span underline');
  } else {
    words[counter].setAttribute('class', 'span wrong');
    console.log(words[counter]);
  }

  console.log(event.key);
}
addEventListener('keydown', typed);
