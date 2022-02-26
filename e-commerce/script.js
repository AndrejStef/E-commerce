const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');
let MainImg = document.getElementById('MainImg');
let smallImg = document.getElementsByClassName('small-img');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
};

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active')
    })
}


for (let i = 0; i < smallImg.length; i++) {
    smallImg[i].onclick = function () {
        MainImg.src = smallImg[i].src
    }
}