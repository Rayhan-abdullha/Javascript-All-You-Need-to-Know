var rect = function(width, height) {
    this.width = width 
    this.height = height

    this.draw = function() {
        console.log('i am draw function');
        console.log(this.width);
        console.log(this.height);
    }
}
// explain new keyword
function myNew(constructor) {
    var obj = {}
    Object.setPrototypeOf(obj, constructor.prototype)
    var argsArray = Array.prototype.slice.apply(arguments)
    constructor.apply(obj, argsArray.slice(1))

    return obj
}
const rect1 = myNew (rect, 10, 20)
rect1.draw()
