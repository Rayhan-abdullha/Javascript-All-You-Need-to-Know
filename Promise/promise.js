// promise
function getIphone (isPassed) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (isPassed) {
                resolve('I have got a Iphone')
            } else {
                reject(new Error('error'))
            }
        })
    })

}

getIphone(true)
    .then((res) => console.log(res))
    .catch((e) => console.log(e.message))