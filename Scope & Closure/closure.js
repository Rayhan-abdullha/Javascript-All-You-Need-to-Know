// Closure is when a function is able to remember and access it's lexical scop even when that function executing outside it's lexical scope.


function wrapValue(n) {
    return function () {
        console.log('i am scope');
    }
}
var res = wrapValue()
res()