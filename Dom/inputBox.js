let name = document.getElementById('name')

name.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        document.getElementById('showName').innerHTML = e.target.value
        e.target.value = ''
    }
})

let skills = document.getElementsByName('skill')
let result = document.getElementById('result')

let checkedSkill = [];
[...skills].forEach(skill => {
    skill.addEventListener('click' ,function(e) {
        if (e.target.checked) {
            checkedSkill.push(e.target.value)
            getResult(result, checkedSkill)            
        } else {
            let index = checkedSkill.indexOf(event.target.value)
            checkedSkill.splice(index, 1)
            getResult(result, checkedSkill)
        }
    })
})

function getResult (parent, skill) {
    let res = ''
    skill.forEach((value, index) => {
        res += `(${index}) ${value} `
    })
    parent.innerHTML = res
    parent.style.color = 'green'
}

// 

let list = document.getElementById('list');

[...list.children].forEach(v => {
    v.addEventListener('dblclick', function(e) {
        if (this.contains(event.target)) {
            let innerText = e.target.innerText
            e.target.innerHTML = ''
            let inputBox = createInputBox(innerText)
            e.target.appendChild(inputBox)
            inputBox.addEventListener('keypress', function(event) {
                if (event.key === 'Enter') {
                    e.target.innerHTML = event.target.value
                }
            })
        }
    })
});

function createInputBox(value) {
    let inp = document.createElement('input')
    inp.type = 'text'
    inp.className = 'form-control'
    inp.value = value
    return inp
}
