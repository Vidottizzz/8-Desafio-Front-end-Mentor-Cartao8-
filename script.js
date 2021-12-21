const defaultDiv = document.querySelector('footer');
const buttonImg = document.querySelector('.footer-social')
const secondDiv = document.querySelector('.wrap-footer-active');
const button = document.querySelector('.social-div');
const button2 = document.querySelector('.social-div-active');
const popover = document.querySelector('.popover-content');

secondDiv.classList.add('hide');

button.addEventListener('click', () => {
    // !defaultDiv.classList.contains('.hide') ?  defaultDiv.classList.add('hide') : secondDiv.classList.remove('hide');
    let largura = window.innerWidth;
    if (largura < 760) {
        secondDiv.classList.toggle('hide')
        defaultDiv.classList.toggle('hide');
    }
    if (largura > 760) {
        secondDiv.classList.add('hide');
        defaultDiv.classList.remove('hide')
    }
    popover.classList.toggle('show-pop')

});

button2.addEventListener('click', () => {
    secondDiv.classList.toggle('hide');
    defaultDiv.classList.toggle('hide');
});

window.addEventListener('resize', function () {
    let largura = window.innerWidth;

    if (largura > 760) {
        secondDiv.classList.add('hide');
        defaultDiv.classList.remove('hide')
        popover.classList.remove('show-pop');
        
    } else {
        buttonImg.classList.remove('filter-white');
    }
});