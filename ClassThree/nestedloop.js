// // ********** Nested Loop *********//

// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5

var name = 5

for (var i = 1; i <= name; i++) {
    var result = ''
    for (var j = 1; j <= i; j++) {
        result += j + ' '
    }
    console.log(result)
}



// **********
// **********
// **********
// **********
// **********


var p = 10

for (var v = 1; v <= 5; v++) {
    var ans = ' '
    for (var s = 1; s <= p; s++) {
        ans += '* '
    }
    console.log(ans)
}