// Search Data //

// Array to Find same Data //

var arr = [3, 4, 5, 6, 1, 3, 9, 8]
var find = 50
var isOk = false

for (var i = 0; i <= arr.length; i++) {
    if (arr[i] === find) {
        console.log('find a ' + i + ' number index')
        isOk = true
    } 
}

if (!isOk) {
    console.log('find not a valid number')
}
