// sort, some, every Method //

var arr = [31, 3, 56, 6, 4, 7, -8]

arr.sort(function(a , b) {
    if (a > b) {
        return 1
    } else if (a < b) {
        return -1
    } else {
        return 0
    }
})
console.log(arr);

// some method
var res1 = arr.some(function(value) {
    return value < 0
})
console.log(res1);

var res2 = arr.some(function(value) {
    return value % 2 === 0
})
console.log(res2);

// every method
var res3 = arr.every(function(value) {
    return value > 0
})
console.log(res3);