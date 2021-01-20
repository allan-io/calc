const submit = document.querySelector('.submit')
const result = document.querySelector('h1')
const num1 = document.querySelector('#num1')
const num2 = document.querySelector('#num2')
const button = document.querySelector('button')

const calcNum = () => {
    return parseInt(num1.value) + (parseInt(num1.value) * parseInt(num2.value))
}

button.addEventListener('click', (e) => {
    e.preventDefault()
    result.classList.add('hide')
    result.innerText = 'Resultado = '

    if (result.classList.contains('hide')) {
        const text = document.createTextNode(`${calcNum()}`)
        result.appendChild(text)
        result.classList.remove('hide')
    }
})

