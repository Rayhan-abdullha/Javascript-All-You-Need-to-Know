let list2 = document.getElementById('container')

let p = createElement('p', 'lead', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam in tempore illo nostrum iste. Officiis ipsa tempora commodi! Sit praesentium alias possimus eum inventore. Maiores explicabo, pariatur omnis adipisci, fugiat ullam saepe deleniti beatae debitis, eveniet repellendus! Vitae, at nemo.')

list2.insertAdjacentElement('beforeEnd', p)
// list2.insertAdjacentElement('afterbegin', p)
// list2.insertAdjacentElement('afterend', p)
// list2.insertAdjacentElement('beforeEnd', p)

function createElement(create, className, innerHTML) {
    let tag = document.createElement(create)
    tag.className = className || ''
    tag.innerHTML = innerHTML || ''
    return tag
}
