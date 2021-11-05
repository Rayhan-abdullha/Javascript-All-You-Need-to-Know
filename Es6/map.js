// Map Data Structure

let map = new Map([
    ['a', 10],
    ['b', 20]
])
map.set({name: 'codder'}, 55)
// map.set('c', 55)
// console.log(map.size);
// console.log(map.get('b'));
// console.log(map);

// for (let [k, v] of map) {
//     console.log(v, k);
// }

map.forEach((v, k) => {
    console.log(k, v);
})