// forEach //

var arr = [1, 2, 3, 4]

// var sum = 0
// arr.forEach(function(value, index, arr) {
//     sum += value
// })
// console.log(sum);


// forEach Explain
function forEachFunction(arr, cb) {
    for (var i = 0; i < arr.length; i++) {
        cb(arr[i], i, arr);
    }
}
var sum = 0
forEachFunction(arr, function (value, index, arr) {
    console.log(arr);
    sum += value
})
console.log(sum);

//
forEachFunction (arr, function(value, index, arr) {
    arr[index] = value + 5
})

console.log(arr);