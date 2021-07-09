// chapter-Five
// String in Javascript
//

//What is String

var s = 10
var str = s + ''
console.log(str);

var str1 = 'Hello' // string litaral
console.log(str1);

var a = 10
var str2 = String(a) // string constractor
console.log(str2);

var n = 10
var str3 = n.toString() // string constractor
console.log(str3)


// **** Escape Notation ***//

var singleCot = 'This is a \'Stirng\''

var tab = 'This is a \tString' 

var newlineCreate = 'This is a \nString'

var backFlask = 'This is a \\backflask' 

var j = 'hello \rworld' 

var k = 'Whats your \vname' 

var o = 'This is \btext'

var k = 'Whats your \fname'

console.log(singleCot)


// // ********* String Compairson *********//
// // Lexicographic System to Compare to String //

var a = 'Z'
var b = 'a'

console.log(a > b)
console.log('001' === 1)


// Concat Stirng //

var sr = 'I am'
var bb = 'Hm Nayem'

var c = sr.concat(' ', bb)
console.log(c.substr(0)) 
console.log(c.charAt(5))
console.log(c.startsWith('i am'))
console.log(c.endsWith('nayem'))
console.log(c.toUpperCase())
console.log(c.toLowerCase())
console.log('     This is text    '.trim())
console.log(c.split(' '))

// ************* String length ***************//

// Hard Away //
var name = 'hello world'
var result = 0

while (true) {
    if (name.charAt(result) == '') {
        break
    } else {
        result++
    }
}
console.log(result)


// Sortcut Away //
var name = 'hello world'

console.log(name.length)



