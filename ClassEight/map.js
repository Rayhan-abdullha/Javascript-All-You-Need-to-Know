// ******** Map ******** //

// map method

// var arr = [1, 2, 3, 4, 5 , 6]
// var res = arr.map(function(value) {
//     return value * value
// })
// console.log(res);


// map method explain

var arr = [1, 2, 3, 4, 5 , 6]

function myMap(arr1, cb) {
    var newArr = []
    for (var i = 0; i < arr1.length; i++) {
        var cbf = cb(arr1[i], i, arr1)
        newArr.push(cbf)
    }
    return newArr
} 

var ress = myMap(arr, function(value){
    return value * value
})
console.log(arr);
console.log(ress);