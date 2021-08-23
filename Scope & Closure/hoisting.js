// hoisting //

var a = 100

print(10)

var newPrint = print
newPrint(45)

function print(a) {
    console.log(a);
}

print(a)

// creationl phase
// a = undefined
// newPrint = undefined
// print = ref


// Executional Phase
// a = 100
// newPrint = ref
// print = 100