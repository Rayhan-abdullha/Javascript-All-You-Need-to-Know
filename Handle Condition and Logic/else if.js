//===========simple logic else if=======//

var a = 20
var b = 20

if (a > b) {
    console.log('A is greater than B')
} else if(a < b) {
    console.log('B is greater than A')
} else{
    console.log('A is equal to B')
}


// Even number or Odd number (0 is zero)

var nums = 0

if (nums === 0) {
    console.log(nums + ' is zero')
} else if (nums % 2 === 0) {
    console.log(nums + ' is even Number')
} else {
    console.log(nums + ' is odd Number')
}


// 2 3 5 7 // Prime number checked

var n = 2

if ( n < 10 && (n == 2 || n == 3 || n == 5 || n == 7)) {
    console.log(n + ' is smaller than 10')
} else if ( n > 10 ) {
    console.log(n + ' is greater than 10 its a prime number')
} else {
    console.log(n + ' is greater than 10')
}