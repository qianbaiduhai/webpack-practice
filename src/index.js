import _ from 'lodash';
import './style.css'
import HandLoveImg from './handLove.jpg'

function component() {
    var element = document.createElement('div');
    element.innerHTML = _.join(['hello', 'webpack'], ' ')
    element.classList.add('hello')

    var myImg = new Image()
    myImg.src = HandLoveImg

    element.appendChild(myImg)

    return element
}

document.body.appendChild(component())
