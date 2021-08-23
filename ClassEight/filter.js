// filter //

// filter method 

// var arr = [1, 2, 4, 5, 6, 3]

// var filterArr = arr.filter(function(value) {
//     return value % 2 === 0
// })
// console.log(filterArr);


// filter method explain

var arr = [1, 2, 4, 5, 6, 3]

function myFilter(arr1, cb) {
    var newArr = []
    for (var i = 0; i < arr1.length; i++) {
        if (cb(arr[i])) {
            newArr.push(arr[i])
        }
    }
    return newArr
}

var res = myFilter(arr, function(value) {
    return value % 2 === 0
})
console.log(res);

var res = myFilter(arr, function(value) {
    return value < 4
})
console.log(res);