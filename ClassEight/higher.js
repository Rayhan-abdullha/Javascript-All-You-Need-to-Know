
function base(b) {
    return function(n) {
        var result = 1
        for (var i = 0; i < b; i++) {
            result *= n
        }
        return result
    }
}
var res = base(10)(2)
console.log(res);