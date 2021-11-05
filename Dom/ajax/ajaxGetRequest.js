// const xhr = new XMLHttpRequest()

// xhr.open('get', 'https://jsonplaceholder.typicode.com/users')

// xhr.onreadystatechange = function (e) {
//     if (xhr.readyState === 4) {
//         if (xhr.status === 200) {
//             let user = JSON.parse(xhr.response)
//             console.log(user);
//             user.map(u => {
//                 let main = document.querySelector('.container')
//                 console.log(main);
//                 let p = document.createElement('div')
//                 p.innerHTML = `
//                     <p>${u.name}</p>
//                     <span>${u.email}</span>
//                 `
//                 main.appendChild(p)
//             })
//         } else {
//             console.log(xhr.status);
//         }
//     }
// }

// xhr.send()

function getRequest(url, callback) {
    const xhr = new XMLHttpRequest()
    xhr.open('get', url)
    xhr.onreadystatechange = function (e) {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                let response = JSON.parse(xhr.response)
                callback(null, response)
            } else {
                callback(xhr.status, null)
            }
        }

    }
    xhr.send()
}

getRequest('https://jsonplaceholder.typicode.com/posts', function(err, res) {
    if (err) {
        console.log(err);
    } else {
        res.forEach(r => console.log(r.title))
    }
})