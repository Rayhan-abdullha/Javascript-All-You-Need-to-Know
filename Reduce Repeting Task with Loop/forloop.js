//===========For Loop===========//

//====//
y
for (var n = 0; n < 100; n++) {
    console.log((n + 1) + ' Hello Your Computer is Hacked')
}

// 1 - 20 even number

for (var i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log('This is even ' + i + ' number')
    }
}

// 1 - 10 sum

var sum = 0

for (var i = 1; i <= 10; i++) {
    console.log(sum + ' + ' + i + ' = ' + (sum + i))
    sum += i
}
console.log('result = ' + sum)

// 1 - 100 even number sum ?

var result = 0

for (var i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log(i)
        result += i
    }
}
console.log('restlt = ' + result)
