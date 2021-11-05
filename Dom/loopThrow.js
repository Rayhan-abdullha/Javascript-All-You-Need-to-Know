// How to Loop throw in HTMLCollection//

let list2 = document.getElementsByTagName('li')
console.log(list2);

// let arry = Array.from(list2)
// let arry2 = Array.prototype.slice.apply(list2)
let arry3 = [...list2]

arry3.forEach((v) => {
    v.innerHTML = 'same'
})