const values = [10, 1, 22, 23, 41, 5, 18, 7, 80, 9];

console.log('in order');
values.forEach((number) => {
  console.log(number);
});

console.log('reverse');
values.forEach((number, index) => {
  console.log(values[values.length - 1 - index]);
});
