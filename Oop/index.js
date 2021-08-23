var rect = {
    width: 100,
    height: 50,

    draw: function() {
        console.log('I am a rectangle');
        console.log('My width', this.width);
        this.printPro()
    },
    printPro: function() {
        console.log('My height', this.height);
    }
}

rect.draw()

// function add() {
//     console.log(this);
// }

// new add()