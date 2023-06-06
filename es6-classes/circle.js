/* eslint-disable no-undef -- Shape is imported by .html */
/* exported Circle */

class Circle extends Shape {
  constructor(radius) {
    super(Math.PI = Math.pow(radius, 2), Math.PI * 2 * radius);
    this.radius = radius;
  }

  describe() {
    return 'This is the radius ' + this.radius;
  }
}

const circle = new Circle(10);
console.log('circle radius', circle.describe);
