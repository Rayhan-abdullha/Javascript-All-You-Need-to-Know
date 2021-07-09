// Traverse a  Array //

// Array 

var arr = [2 , 5 , 3, 8, 1]
sum = 0

for (var i = 0; i < arr.length; i++) {
    sum += arr[i]
}
console.log(sum)

// Find Array length //

var arr = [3, 4, 2, 6, 23, 56, 21, 68, 9]

console.log(arr.length)

// Find Array to Even number //

var arr = [3, 4, 2, 6, 23, 56, 21, 68, 9]


for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
        console.log(arr[i] + ' Even Number')
    }
}


// Find Array to Odd number //

var arr1 = [4, 23, 4, 67, 7, 1, 4, 7,]

for (var k = 0; k < arr1.length; k++) {
    if (arr1[k] % 2 === 1) {
        console.log(arr1[k] + ' Odd Number')
    }
}


// Find Even Number Sum //

var arr = [3, 4, 2, 6, 23, 56, 21, 68, 9]
var sum = 0

for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
        console.log(arr[i])
        sum += arr[i]
    }
}
console.log('result = ' + sum)


// Find Odd Number Sum //

var arr = [3, 4, 2, 6, 23, 56, 21, 68, 9]
var sum = 0

for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 1) {
        console.log(arr[i])
        sum += arr[i]
    }
}

console.log('result = ' + sum)


