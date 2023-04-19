/* eslint-disable no-undef -- Shape is imported by .html */
/* exported Square */

class Square extends Shape {
  constructor(width) { super(); }
  describe() {
    return 'This is the width ' + this.width;
  }
}

const square = new Square();
console.log('square width', square.describe);
