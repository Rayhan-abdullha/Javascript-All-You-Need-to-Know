function exted(Parent, Child) {
    Child.prototype = Object.create(Parent.prototype)
    Child.prototype.constructor = Child
}

function Shape(color) {
    this.color = color
}
Shape.prototype.common = function () {
    console.log('I am common method');
}
Shape.prototype.common = function () {
    console.log('i am a shape common')
}

// Square
function Square(width, color) {
    Shape.call(this, color)
    this.width = width
}
exted(Shape, Square)

Square.prototype.draw = function () {
    console.log('I am ' + this.width);
}
Square.prototype.common = function () {
    console.log('i am a Square common')
}
// Circle
function Circle(width, color) {
    Shape.call(this, color)
    this.width = width
}
exted(Shape, Circle)

Circle.prototype.common = function () {
    Shape.prototype.common.call(this)
    console.log('i am a common function')
}

var shape = new Shape('red')
var square = new Square(100, 'green')
var circle = new Circle(50, 'Yellow')
var arr = [shape, square, circle]
for (var i of arr) {
    i.common()
}