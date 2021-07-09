// infinity loop//

for (; ;) { 
    var rand = Math.floor(Math.random() * 50 + 1)
    if (rand === 9) {
        console.log('Winner')
        break
    } else {
        console.log('You have got ' + rand)
    }
}