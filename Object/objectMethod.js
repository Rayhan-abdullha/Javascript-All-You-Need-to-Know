// Object methods

var data = {
    id: 1,
    name: 'codder',
    age: 24,
    address: 'Dhaka'
}

// delete method
console.log(data);
delete data.age
console.log(data);

// object keys
console.log(Object.keys(data));

// object values
console.log(Object.values(data));

// object entries
console.log(Object.entries(data));

// object assign
var clone = Object.assign({}, data)
clone.name = 'RayhaN'
console.log(clone);
console.log(data);