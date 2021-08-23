// rescursive function //

function recursive(n) {
    if (n == 0) {
        return
    }
    console.log(n);
    recursive(n - 1)
}
recursive(10)


// factorial recursive

function fact(n) {
    if (n === 1) {
        return 1
    } else {
        return n * fact(n - 1)
    }
}

var res = fact(5)
console.log(res);