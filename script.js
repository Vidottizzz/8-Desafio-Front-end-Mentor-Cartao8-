const defaultDiv = document.querySelector('footer');
const secondDiv = document.querySelector('.wrap-footer-active');
const button = document.querySelector('.social-div');
const button2 = document.querySelector('.social-div-active');

secondDiv.classList.add('hide');

button.addEventListener('click', ()=> {
    // !defaultDiv.classList.contains('.hide') ?  defaultDiv.classList.add('hide') : secondDiv.classList.remove('hide');

   
           secondDiv.classList.toggle('hide')
           defaultDiv.classList.toggle('hide');
          
});

button2.addEventListener('click', ()=> {

    secondDiv.classList.toggle('hide');
    defaultDiv.classList.toggle('hide');

});


