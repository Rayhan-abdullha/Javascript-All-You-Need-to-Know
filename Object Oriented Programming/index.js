var rect = {
    width: 100,
    height: 50,

    draw: function() {
        console.log('My width', this.width);
        this.print()
    },
    print: function() {
        console.log('My height', this.height);
    }
}

rect.draw()

// function add() {
//     console.log(this);
// }

// new add()