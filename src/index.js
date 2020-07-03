import _ from 'lodash';
import './style.css'
import HandLoveImg from './handLove.jpg'
import Data from './data.xml'

function component() {
    var element = document.createElement('div');
    element.innerHTML = _.join(['hello', 'webpack'], ' ')
    element.classList.add('hello')

    var myImg = new Image()
    myImg.src = HandLoveImg

    element.appendChild(myImg)
    console.log(Data);

    return element
}

document.body.appendChild(component())
