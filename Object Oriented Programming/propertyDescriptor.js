// property descriptor //

var person = {
    name: 'Coder'
}
// let baseObj = Object.getPrototypeOf(person)
// let descriptor = Object.getOwnPropertyDescriptor(baseObj, "toString")
// console.log(descriptor);

Object.defineProperty(person , 'name',{
    enumerable: false,
    writable: false,
    configurable: false,
    
})
console.log(person);