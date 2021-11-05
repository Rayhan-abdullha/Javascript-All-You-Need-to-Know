// this es6

class Shape {
    draw() {
        console.log(this);// undefined
    }
}
const rect = new Shape()
let res = rect.draw
res()


// window objcet refer
function Add() {
    this.Shape = function() {
        console.log(this);// window object
    }
}

const result = new Add()
let res2 = result.Shape
res2()