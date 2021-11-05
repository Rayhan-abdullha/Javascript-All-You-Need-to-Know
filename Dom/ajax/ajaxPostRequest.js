// promise

// const postForm = document.querySelector('#post-form')
// const post = document.querySelector('#post')

// const url = 'https://jsonplaceholder.typicode.com/posts'

// postForm.addEventListener('submit', function (e) {
//     e.preventDefault()
//     let title = this.title.value || undefined
//     let body = this.body.value || undefined 
    
//     if (title && body) {
//         fetch(url, {
//             method: 'POST',
//             body: JSON.stringify({title, body}),
//             headers: {
//                 'Content-type' : 'Application/JSON'
//             },
//         })
//         .then(res => res.json())
//         .then(data => console.log(data))
//         .catch(e => console.log(e.message))
//     } else {
//         console.log('Please Provide title & value');
//     }

// })

// Another

const postForm = document.querySelector('#title')
const postBody = document.querySelector('#body')
const submitBtn = document.querySelector('#submitBtn')
const url = 'https://jsonplaceholder.typicode.com/posts'

submitBtn.addEventListener('click', function (e) {
    let title = postForm.value
    let body = postBody.value
    fetch(url, {
        method: 'POST',
        body: JSON.stringify({title, body}),
        headers: {
            'Content-type' : 'Application/JSON'
        },
    })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(e => console.log(e.message))

})