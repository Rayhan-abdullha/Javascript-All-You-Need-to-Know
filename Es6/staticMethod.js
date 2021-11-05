// static method //

class Person {
    constructor(name, email) {
        this.name = name
        this.email = email    
    }
    draw() {
        console.log(this.name, this.email);
    }
    static print(str) {
        let person = JSON.parse(str)
        return new Person(person.name, person.email)
    }
    
}
let myJsonData = '{"name": "codder", "email": "test@gmail.com"}'
let res = Person.print(myJsonData)
console.log(res);
res.draw()