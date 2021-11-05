// function Scoping //

var a = 2000

function scope() {
    function innerFunc() {
        console.log(a); // 20
    }
    console.log(a); // 2000
    innerFunc()
}
scope()