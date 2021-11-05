// Destructure

let person = {
    names: 'codder',
    email: 'tes@gmail.com',
    adress: {
        city: 'Dahak',
        country: 'Bd'
    }
}
let { names, email, adress: {city, country} } = person
console.log(email, names, city, country);