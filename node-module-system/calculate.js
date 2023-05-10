import add from './add.js';
import subtract from './subtract.js';
import multiply from './multiply.js';
import divide from './divide.js';

if (process.argv[3] === 'minus') {
  subtract(4, 2);
}
if (process.argv[3] === 'times') {
  multiply(5, 3);
}
if (process.argv[3] === 'over') {
  divide(20, 5);
}
if (process.argv[3] === 'plus') {
  add(2, 1);
}
