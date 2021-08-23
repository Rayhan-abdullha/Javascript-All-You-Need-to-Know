// currying //

function add(a){
    return function(b) {
        return function(c) {
            return a + b + c;
        }
    }
}
var res = add(3)(2)(10)
console.log(res);