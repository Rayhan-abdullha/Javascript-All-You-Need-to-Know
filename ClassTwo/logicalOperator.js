// && //
 
// A && B //

// true && true = true

// true && false = false

// false && ture = false

// false && false = false

// A || B

// true || true = true

// true || false = true

// false || true = true

// false || false = false

var a = 10
var b = 20
var c = 30
var d = 40

if (a > b && c > d) {
    console.log('A greater than B & C grater than D')
} else {
    console.log('At least one condition false')
}

//***A && B****//

if (a > b || c > d) {
    console.log('A greater than B & C grater than D')
} else {
    console.log('two condition false')
}

//============
var check = !!(a > b)// false 
console.log(check)

