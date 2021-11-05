// Closure is when a function is able to remember and access it's lexical scop even when that function executing outside it's lexical scope.


function wrapValue() {
    var msg = 'Good morning'
    return function () {
        console.log(msg);
    }
}
var res = wrapValue()
res()


// closure forloop

for (let i = 1; i <= 5; i++) {
    (function(i) {
        setTimeout(function() {
            console.log(i);
        }, 1000)
    })(i)
}