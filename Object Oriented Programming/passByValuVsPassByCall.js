// Pass by value Vs Pass by Reference //

// primitive data
var n = 10

function add(n) {
    n = n + 2
    console.log(n);
}
add(n)
console.log(n);


// object data
var obj = {
    name: 'Codder RayhaN',
    age: 23
}

function change(obj) {
    obj.name = 'CR',
    obj.age = 24
    console.log(obj);
}
change(obj)
console.log(obj);