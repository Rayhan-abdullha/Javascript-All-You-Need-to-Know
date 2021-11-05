let list = document.getElementById('list-group')
let firstChild = list.firstElementChild // firstChild

setTimeout(() => {
    firstChild.innerHTML = `${firstChild.innerHTML} (modified)`
    firstChild.style.color = 'green'
    firstChild.classList.add('Text-success') // another class added
}, 3000); // update

setTimeout(() => {
    list.lastElementChild.remove()
},2000) // remove