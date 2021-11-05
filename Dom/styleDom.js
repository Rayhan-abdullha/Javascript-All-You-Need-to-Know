let title = document.getElementById('title')
let list1 = document.getElementById('list')


let styleObj = {
    background: 'tomato',
    fontSize: '20px',
    color: 'white',

}

Object.assign(title.style, styleObj);

[...list.children].forEach((c) => {
    Object.assign(c.style, styleObj)
})

