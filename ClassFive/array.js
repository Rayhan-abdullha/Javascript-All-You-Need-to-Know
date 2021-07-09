// Chapter Six : Working With Arrays

// ******** What is Array ********** //

// Array is a Data Struture Where we can organize multiple 
// data under a single variable.

//

var arr = [1, 2, 3, 4, 5]
arr[5] = 6
arr[10] = 11

console.log(arr[0]) // result = 1
console.log(arr[5]) // // result = 6
console.log(arr[10]) // result = 11
console.log(arr[6]) 
arr[2] = 20

var find = arr.indexOf(4);
console.log(find)

console.log(arr) // result = [ 1, 2, 20, 4, 5, 6, <4 empty items>, 11 ]

// Array length

console.log(arr.length) // restlt = 11

