// Basic Function //

function sum() {
    var a = 20
    var b = 30
    console.log(a + b);
}
sum()

//
function add(a, b) {
    console.log(a + b);
}
add(20, 30)

// array sum //

function sum1(array) {
    var sum = 0
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        sum += element
    }
    console.log(sum);
}
var arr = [20, 10, 30]
sum1(arr)
