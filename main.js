const box = document.querySelector('.box');
const button = document.querySelector('.btn');

button.addEventListener('click', () => {
    box.style.width = '100%';
});

box.addEventListener('transitionend', function (e) {
    console.log(e);
    box.style.width = '0%';
})
