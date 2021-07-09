
while (true) {
    rand = Math.floor(Math.random() * 50 + 1)
    if (rand === 5) {
        console.log('winner')
        break
    } else {
        console.log('You got ' + rand)
    }
}