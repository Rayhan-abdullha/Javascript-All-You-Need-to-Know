// return function

function sum1(array) {
    var sum = 0
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        sum += element
    }
    return sum
}
var arr = [10, 20, 50]
var res = sum1(arr)
console.log('from return functin ' + res);

// object returns

function sum1() {
    return {
        name: 'codder RayhaN',
        email: 'test@gmail.com'
    }
}
var arr = [10, 20, 50]
var res = sum1(arr)
console.log('from return functin ' + res)