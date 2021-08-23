// find & findIndex Method //

/*

var arr = [1, 2, 3, 4, 5, 6, 7, 8]

var result = arr.find(function(value) {
    return value === 5
})

console.log(result);


var result1 = arr.findIndex(function(value) {
    return value === 8
})
console.log(result1);

*/


//===== find & findIndex Method explain=====//

var arr = [1, 2, 4, 5, 6, 7]

function myFind(arr, cb) {
    for (var i = 0; i < arr.length; i++) {
        if (cb(arr[i])) {
            // return arr[i]
            return i
        }
    }
}

var result = myFind(arr, function(value) {
    return value === 4
})

console.log(result);