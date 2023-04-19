/* eslint-disable no-undef -- Shape is imported by .html */
/* exported Circle */

class Circle extends Shape {
  constructor(radius) { super(); }
  describe() {
    return 'This is the radius ' + this.radius;
  }
}

const circle = new Circle();
console.log('circle radius', circle.describe);
