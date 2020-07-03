import './style.css'

function component() {
    var element = document.createElement('div')
    element.classList.add('testPostcssLoader')
    element.innerHTML = '测试postcss'
    return element
}

document.body.appendChild(component())
