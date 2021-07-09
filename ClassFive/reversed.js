// Reverse Method in Javascript //

var arr = [21, 44, 3, 4, 66, 55, 3]

for (var i = 0; i < (arr.length / 2); i++) {
    var temp = arr[i]
    arr[i] = arr[arr.length - 1 - i]
    arr[arr.length - 1 - i] = temp
}
console.log(arr)