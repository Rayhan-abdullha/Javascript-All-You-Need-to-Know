function Shape(color) {
    this.color = color
}
Shape.prototype.common = function() {
    console.log('I am Common Method')
}

function Square(width, color) {
    Shape.call(this, color)
    this.width = width
}
Square.prototype = Object.create(Shape.prototype) // prototypical inheritence
Square.prototype.constructor = Square // reset constructor
Square.prototype.draw = function() {
    console.log('Drawing');
}

var s1 = new Shape()
var s2 = new Square(54, 'green')