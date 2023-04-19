/* eslint-disable no-undef -- Shape is imported by .html */
/* exported Circle */

class Circle extends Shape {
  constructor(radius) {
    super(area, perimeter);
    this.radius = radius;
  }

  describe() {
    return 'This is the radius ' + this.radius;
  }
}

const circle = new Circle(10);
console.log('circle radius', circle.describe);
