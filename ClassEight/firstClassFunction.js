// First Class Function

function add(a, b) {
    return a + b
}

// A function can be stored in a variable.
var sum = add
console.log(sum(20, 30));

// A function can be stored in an Array.
var arr = []
arr.push(sum)
console.log(arr);
console.log(arr[0](5, 6));

// A Function can be stored in an Object.
var obj = {
    sum1: add
}
console.log(obj.sum1(10,30));

// We can Create Function as need
setTimeout(function() {
    console.log('I have created...');
}, 500)
