// constructor pattern //

var Rect = function(width, height) {
    this.width = width 
    this.height = height

    this.draw = function() {
        console.log('i am draw function');
        console.log(this.width);
        console.log(this.height);
    }
}

var rect1 = new Rect(10, 20)
rect1.draw()


// var str = new String('hello')
// console.log(str);

