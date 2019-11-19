let myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world';

let myImage = document.querySelector('img');
myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === './images/fun.png') {
        myImage.setAttribute('src', './images/fun2.png');
    } else {
        myImage.setAttribute('src', './images/fun.png');
    }
}

let myButton = document.querySelector('button');

function setUserName() {
    let myName = prompt('请输入你的名字。');
    if (!myName || myName === null) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.textContent = myName + 'Fun';
    }
}

if (!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = storedName + 'Fun';
}

myButton.onclick = function() {
    setUserName();
}