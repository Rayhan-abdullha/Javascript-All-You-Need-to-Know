// class //


class Rect {
    constructor () {
        this.circle = function() {
          console.log('i am circle');
        }
    }
    print = function () {
        console.log(this.width);
    }
    draw() {
        console.log('i am draw');
    }
}
const re = new Rect('rayhan', 33)
console.log(re);