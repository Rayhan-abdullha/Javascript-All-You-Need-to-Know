// Rest & Spread Operator //

// rest operator
function sum(...rest) {
    return rest.reduce((a, b) => a + b)
}
console.log(sum(2, 3, 45,6));

// spread operator//
let a = [3,45,6]
let b = [...a]
b[0] = 555
console.log(a);
console.log(b);

//
let obj = {
    a: 10,
    b: 20,
    c: 30
}

let obj2 = {
    ...obj
}
obj2.a = 250
console.log(obj2);
console.log(obj);