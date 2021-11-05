
// btn.onclick = function(event) {
//     console.log(event);
// }

// addEventListener
let btn = document.getElementById('btn')
let list = document.getElementById('list')
btn.addEventListener('click', function() {
    let child = list.lastElementChild.cloneNode(true)
    child.innerHTML = 'Newly Created'
    list.appendChild(child)
})

// delete EventListener
btnDelete.addEventListener('click', function() {
    list.lastElementChild.remove()
})

// list.addEventListener('click', function(e) {
//     console.log(e.target);
// })

// mousemove pointer
let box = document.getElementById('box')
box.addEventListener('mousemove', function(event) {
    if (event.offsetX === 50 & event.offsetY === 0) {
        alert('WoW')
    } else {
        document.getElementById('x-value').innerHTML = event.offsetX
        document.getElementById('y-value').innerHTML = event.offsetY
    }
})