function handleClick(event) {
  console.log('button clicked');
  console.log(event);
  console.log(event.target);
}
const clik = document.querySelector('.click-button');
clik.addEventListener('click', handleClick);

function handleMouseover(event) {
  console.log('button hovered');
  console.log(event);
  console.log(event.target);
}
const hovrd = document.querySelector('.hover-button');
hovrd.addEventListener('mouseover', handleMouseover);

function handleDoubleClick(event) {
  console.log('button double clicked');
  console.log(event);
  console.log(event.target);
}
const dbleclick = document.querySelector('.double-click-button');
dbleclick.addEventListener('dblclick', handleDoubleClick);
