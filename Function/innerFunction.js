// inner function //

function somthing(greet, name) {
    function sayHi() {
        if (name) {
            return name.split(' ')[0]
        } else {
            return ''
        }
    }
    var message = greet + sayHi()
    return message
}
const res = somthing('Good morning ', 'codder RayhaN')
console.log(res);