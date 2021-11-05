// // function is object //

// var ret = new Function('width', 'height',  `this.width = width 
//     this.height = height

//     this.draw = function() {
//         console.log('i am draw function');
//         console.log(this.width);
//         console.log(this.height);
//     }`
// )

// var res = new ret(20, 5)
// res.draw()


function test() {
    console.log('somthing');
}

console.log(test.name, test.length);