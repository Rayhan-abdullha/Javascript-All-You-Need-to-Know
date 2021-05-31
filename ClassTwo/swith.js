// *********Today is which day*********//

var date = new Date()
var today = date.getDay()

// 0 - Sunday, 1 - Monday, 2 - Tuesday
switch (today) {
    case 0:
        console.log('today is sunday')
        break
    case 1:
        console.log('today is monday')
        break
    case 2:
        console.log('today is tuesday')
        break
    case 3:
        console.log('today is wednesday')
        break
    case 4:
        console.log('today is thursday')
        break
    case 5:
        console.log('today is friday')
        break
    case 6:
        console.log('today is saturday')
        break
    default: console.log('Find not a valid numbaer')
}


// Another Away //

var date = new Date()
var today = date.getDay()
var daylist = ['sunday','monday','tuesday','wednesday','thusday','friday','saturday']

console.log('today is ' + daylist[today])

