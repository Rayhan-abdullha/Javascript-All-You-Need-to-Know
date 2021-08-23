function greet(msg) {
    function greeting(name) {
        return msg + ' ' + name + '!'
    }
   return greeting
}

var res = greet('good mornign')('rayhan')
console.log(res);

// return function another function
function base(num) {
    function power(n) {
        var res = 1
        for (var i = 0; i < num; i++) {
            res *= n
        }
        return res
    }
    return power
}

var result = base(10)
var res2 = result(2)
console.log(res2);