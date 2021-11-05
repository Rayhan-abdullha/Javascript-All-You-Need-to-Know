// Error handling with If else

function change(v) {
    let result = Number.parseInt(v)
    if (!result) {
        return 'not a valid number'
    } else {
        return result
    }
}
const res = change('number')
console.log(res);