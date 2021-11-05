// Inheritance es6

class Shape {
    constructor (color) {
        this.color = color
    }
    draw() {
        console.log('Drawing...', this.color);
    }
}

class Rectangle extends Shape {
    constructor(color, width, height) {
        super(color)
        this.width = width
        this.height = height
    }

    calculate () {
        return this.width  + this.height
    }
    
}

let rect = new Rectangle('green', 33, 44)
console.log(rect.calculate());