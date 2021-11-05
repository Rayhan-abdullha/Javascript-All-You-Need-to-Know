// generator //

// var range = {
//     from: 1,
//     to: 5,
//     [Symbol.iterator]: function* () {
//         let curr = this.from,
//         while (curr <= this.end) {
//             yield curr++
//         }
//     }
// }

// let it = range[Symbol.iterator]()
// console.log(it.next());

// generator function

// function generator() {
//     yield 1
//     yield 2
//     yield 3
// }

// let it = generator()
// console.log(it);

function* generator(arr) {
    var i = 0
    for(var i = 0; i < arr.length; i++) {
        yield arr[i]
    }
}
let arr1 = [3, 5, 6]
let it = generator(arr1)
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());