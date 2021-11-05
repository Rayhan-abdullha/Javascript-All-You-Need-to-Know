// Object iterator //

var data = {
    name: 'codder',
    age: 24,
    id: 2
}

// find properties in obj
// if ('name' in data) {
//     console.log(data.name);
// } else {
//     console.log(data.name = 'RayhaN');
// }

// console.log(data);

// iterator
for (var i in data) {
    console.log(i);
    console.log(data[i]);
}
console.log(data);