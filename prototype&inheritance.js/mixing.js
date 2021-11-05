// Inheritance and composition Mixing //

function mixin(target, ...sources) {
    Object.assign(target, ...sources)
}

var canWalk = {
    walk: function() {
        console.log('Walking...');
    }
}

var canEat = {
    eat: function() {
        console.log('Eating...');
    }
}

var canSwimming = {
    swim: function(){
        console.log('Swimming...');
    }
}

// var person = Object.assign({}, canWalk, canEat)
// person.name = 'hm'

// Person can
function Person(name) {
    this.name = name
}
mixin(Person.prototype, canWalk, canEat)
var person = new Person('codder')
console.log(person);

// Gold fish can
function GoldFish(name) {
    this.name = name
}
mixin(GoldFish.prototype, canSwimming)
var goldFish = new GoldFish('Gold Fish')
console.log(goldFish);
