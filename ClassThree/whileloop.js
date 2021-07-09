// While loop-- conditon true thakle loop cholte thakbe
// condition false hoye gele loop stop hoye jabe.
// That is Called While loop

var n = 1

while (n < 100) {
    console.log(n + ' Rayhan Abdullah')
    n++ // jodi i++ na use kori tahole n 1 kore + hobe na..
} 

// ********** Random number genaret*******//


// 1 - 10 Er Moddhe Random number genaret koro. than jokhon random number
// 9 genaret hobe tokhon = 'winner winner chiken dinner'
// than jokhon condition false hobe tokhon = 'you have got random number'


var isRunning = true;

while (isRunning) {
    var rand = Math.floor(Math.random() * 20 + 1)
    if (rand === 9) {
        console.log('Winner Winner Chiken Dinner')
        isRunning = false
    } else {
        console.log('You have got ' + rand + ' number')
    }
}




















