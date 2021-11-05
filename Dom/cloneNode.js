let list = document.getElementById('list-group')
let firstChild = list.firstElementChild // firstChild

setTimeout(() => {
    firstChild.innerHTML = `${firstChild.innerHTML} (modified)`
    firstChild.style.color = 'green'
    firstChild.classList.add('Text-success') // another class added
}, 3000); // update

// cloneNode in last-itme
function cloneNode(clone) {
    let c = list.lastElementChild.cloneNode()
    c.innerHTML = clone
    list.appendChild(c)
}

cloneNode('four')
cloneNode('five')

