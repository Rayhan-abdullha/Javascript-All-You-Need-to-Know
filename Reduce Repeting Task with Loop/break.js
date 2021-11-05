// ************** break **************** //

while (true) {
    var rand = Math.floor(Math.random() * 50 + 1) 
    if (rand === 9) {
        console.log('Winner Winner Chicken Dinner')
        break
    } else {
        console.log('You Have got ' + rand)
    }
}

// forloop break statment //

for (var i = 1; i < 10; i++) {
    if (i % 5 === 0) {
        break
    } else {
        console.log(i)
    }
}