/* exported Shape */

class Shape {
  constructor(area, perimeter) {
    this.area = area;
    this.perimeter = perimeter;
  }

  describe() {
    return 'This is the area and perimeter ' + this.area + ' ' + this.perimeter;
  }
}

const shape = new Shape(4, 8);
console.log('shape describe', shape.describe);
