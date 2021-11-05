let formId = document.getElementById('form')
let subName = document.getElementById('subName')
let subEmail = document.getElementById('subEmail')
let subPass = document.getElementById('subPass')

formId.addEventListener('submit', function(e) {
    e.preventDefault()
    let isValid = false
    let formData = {};
    [...this.elements].forEach(element => {
        if (element.type !== 'submit') {
            if(element.value === '') {
                element.classList.add('is-invalid')
            } else {
                formData[element.name] = element.value
            }
        }
    });
    console.log(formData);
    this.reset()
})
