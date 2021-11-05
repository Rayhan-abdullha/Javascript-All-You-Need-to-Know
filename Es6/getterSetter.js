// getter Setter in es6

const _redius = new WeakMap()
const _name = new WeakMap()
const _resize = new WeakMap()

class Circle {
    constructor(redius, name) {
        this.size = 100
        _redius.set(this, redius)
        _name.set(this, name)
        _resize.set(this, () => {
            console.log(this.size);
        })
    }

    // getter setter
    get redius() {
        return _redius.get(this)
    }
    set radius(v) {
        _redius.set(this, v)
    }

    draw() {
        console.log('Drawing...');
        console.log(_redius.get(this), _name.get(this));
        _resize.get(this)()
    }
}

let c1 = new Circle(2, 'codder')
c1.radius = 45000
console.log(c1.redius);