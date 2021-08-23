// factory pattern //

var rect = function(width, height) {
    return {
        width: width,
        height: height,

        draw: function() {
            this.printProperties()
        },
        printProperties: function() {
            console.log(this.width);
            console.log(this.height);
        }
    }
}

var rect1 = rect(50, 20)
rect1.draw()
