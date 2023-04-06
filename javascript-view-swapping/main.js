const $container = document.querySelector('.tab-container');
const $tabs = document.querySelectorAll('.tab');
const $view = document.querySelectorAll('.view');

$container.addEventListener('click', swaps);

function swaps(event) {

  if (event.target.matches('.tab')) {
    for (let i = 0; i < $tabs.length; i++) {
      if (event.target === $tabs[i]) {
        $tabs[i].className = 'tab active';
      } else {
        $tabs[i].className = 'tab';
      }
    }

    const pics = event.target.getAttribute('data-view');
    for (let i = 0; i < $view.length; i++) {
      if (pics === $view[i].getAttribute('data-view')) {
        $view[i].className = 'view';
      } else {
        $view[i].className = 'view hidden';
      }
    }
  }
}
