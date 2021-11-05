// Logic and or oparetor //

var name = ''
var fullname = 'aout'

if (name.length === 0) {
    fullname = 'Rayhan abdullah'
} else {
    fullname = name
}
console.log(fullname)


// another away //

var nam = ''
var fullNam = nam || 'Rayhan Abdullh'

console.log(fullNam)

// Another Shortcut
var isOk = true

isOk && console.log('everything is ok')

