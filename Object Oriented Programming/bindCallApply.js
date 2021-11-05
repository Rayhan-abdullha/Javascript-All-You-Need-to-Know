// Apply, Call, Bind

function Add(c, d) {
    console.log(this.a + this.b + c + d);
}

// call
Add.call({a: 20, b: 10}, 5, 6)

// apply
Add.apply({a: 20, b: 10}, [5, 6])

// bind
var res = Add.bind({a: 20, b: 10})
res(10, 20)

