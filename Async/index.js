/*
async function myAsync() {
    let res = await fetch('https://jsonplaceholder.typicode.com/users')
    let data = await res.json()
    console.log(data)
}
myAsync()
*/

/*
// myAsync()
// class Waiter {
//     async wait() {
//       return await Promise.resolve(1);
//     }
//   }
  
// new Waiter().wait().then(res => console.log(res))
*/

let promise = [Promise.resolve(2), Promise.resolve(2), Promise.resolve(2)]

async function a () {
    let result = await Promise.all(promise)
    console.log(result);
}
a()