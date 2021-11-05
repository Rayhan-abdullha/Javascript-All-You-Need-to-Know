// arr iterator

var arr = [1, 2, 3]

// function createIteratro(collection) {
//     let i = 0
//     return {
//         next() {
//             return {
//                 done: i >= collection.length,
//                 value: collection[i++]
//             }
//         }
//     }
// }
// const myIterator = createIteratro(arr)
// console.log(myIterator.next());

// Es6 iterator
let arr = [2, 3]
let res = arr[Symbol.iterator]()
console.log(res.next());
console.log(res.next());
console.log(res.next());

// Es6 str iterator
let arr1 = 'text'
let str = arr1[Symbol.iterator]()
console.log(str.next());
