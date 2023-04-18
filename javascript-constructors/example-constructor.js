
function ExampleConstructor() {}

console.log('Prototype', ExampleConstructor.prototype);
console.log('type of', typeof ExampleConstructor.prototype);

const ex = new ExampleConstructor();
console.log('new', ex);

const tester = (ex instanceof ExampleConstructor);
console.log('instance of', tester);
