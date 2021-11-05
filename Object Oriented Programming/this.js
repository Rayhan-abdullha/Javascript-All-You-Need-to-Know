// implicit binding
// explicit binding
// new binding
// window binding

var person = {
    name: 'sakib',
    age: 35,
    printPlayerName: function() {
        console.log(this.name);
}
}
person.printPlayerName()

