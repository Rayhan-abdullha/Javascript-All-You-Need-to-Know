function Square(width) {
    this.width = width
    this.draw = function() {
        console.log('draw');
    }
}

var sqr = new Square(10)
var sqr1 = new Square(15)