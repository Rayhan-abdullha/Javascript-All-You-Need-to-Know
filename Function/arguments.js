// arguments //

function traverse(a, b, c) {
    for (var i = 0; i < arguments.length; i++) {
        var element = arguments[i];
        console.log(element);
    }
}
traverse(10, 20, 30, 40)