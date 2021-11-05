// privet data //

// const _redius = Symbol()
// const _name = Symbol()
// const _draw = Symbol()
// class Circle {
//     constructor(redius, name) {
//         this[_redius] = redius
//         this[_name] = name
//     }

//     [_draw]() {
//         console.log('Drawing...');
//     }
// }

// let c1 = new Circle(2, 'codder')
// // let key = Object.getOwnPropertySymbols(c1)
// // console.log(c1[key[0]]); // privet data get

// console.log(c1);


// WeakMap privet data another way.

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

    draw() {
        console.log('Drawing...');
        console.log(_redius.get(this), _name.get(this));
        _resize.get(this)()
    }
}

let c1 = new Circle(2, 'codder')
c1.draw()