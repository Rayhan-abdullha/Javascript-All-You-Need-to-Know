// context //

function a() {
    b()
    console.log('i am function a');
}

function b() {
    d()
    console.log('i am function b');
}

function c() {
    
    console.log('i am function c');
}

function d() {
    c()
  console.log('i am function d');
}

a()
console.log('i am golobal');


// Execution of C function Context
// Execution of D function Context
// Execution of B function Context
// Execution of A function Context
// Execution of global Context