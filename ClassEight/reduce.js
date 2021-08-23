// Reduce function  //

/*

// Reduce method

var arr = [1, 2, 3 , 5, 6, 7]

var sum = arr.reduce(function(prev, curr) {
    return prev + curr
}, 10)

console.log(sum);

// find max value in array
var max = arr.reduce(function(prev, curr) {
    return Math.max(prev, curr)
})
console.log(max);
*/


// Reduce function Explain

var arr2 = [1, 2, 3, 45, 5, 6, 7, 8]

function redcuceExplain(arr, cb, acc) {
    for (var i = 0; i < arr.length; i++) {
        acc = cb(acc, arr[i])
    }
    return acc
}

// sum
var sum = redcuceExplain(arr2, function(prev, curr) {
    return prev + curr
}, 0)
console.log(sum);

// find max value in a array
var max = redcuceExplain(arr2, function(prev, curr) {
    return Math.max(prev, curr)
}, 0)
console.log(max); 