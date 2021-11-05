// what is Pure Function

// It Returns the same result if given the same arguments
// It does ont cause any observable side effect

// This is Pure function
function sqr(n) {
    return n * n
}

console.log(sqr(2));


// This is not pure function
var obj = {
    x: 20,
    y: 30
}

function printObj(point) {
    obj.x = 50
    obj.y = 60
    console.log(point);
} 

printObj(obj)
console.log(obj);
