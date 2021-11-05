// error handling try catch

function tryCatchError(text) {
    // let str = text.trim()
    // let res = str.split(' ')
    // return res

    try {
        let str = text.trim()
        let words = str.split(' ')
        return words
    } catch(e) {
        return e.message + ' Please Provide a Valid Text'
    }
}
const res = tryCatchError(555)
console.log(res);

// another //

// try {
//     console.log('I am Line 1');
//     console.log('I am Line 2');
//     throw new Error('error')
//     console.log('I am Line 3');
// } catch (e) {
//     console.log(e.message);
// }

// another //

// try {
//     console.log('not error');
// } catch (error) {
//     console.log(error.message);
// } finally {
//     console.log('finally done');
// }