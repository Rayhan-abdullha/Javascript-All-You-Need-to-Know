// higher order function

function add(a, b) {
    return a + b;
}

function manipulate(a, b, func) {
    var c = a + b;
    var d = a - b;
    return function() {
        var n = func(a, b)
        return c * d * n
    }
}

var multiply = manipulate(3, 4, add);
console.log(multiply());