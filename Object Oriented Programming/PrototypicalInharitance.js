// Prototypical Inharitance //

function Shape() {

}
Shape.prototype = {
    common: function(){
        console.log('I am common function');
    }

}

function Square(nums) {
    this.nums = nums
}
Square.prototype = Object.create(Shape.prototype)
Square.prototype.draw = function () {
    console.log('i am draw');
}

function Circle(n) {
    this.n = n
}
Circle.prototype = Object.create(Shape.prototype)
var shap1 = new Shape()
var sqr = new Square(45)
var circle = new Circle(20)
