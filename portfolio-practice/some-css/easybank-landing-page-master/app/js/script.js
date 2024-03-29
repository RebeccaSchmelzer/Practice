const btnHamburger = document.querySelector('#btnHamburger');
const body = document.querySelector('body')
const header = document.querySelector('.header')
const overlay = document.querySelector('.overlay')
const fades = document.querySelectorAll('.has-fade')

btnHamburger.addEventListener('click', function(){
    console.log('open ham');

    if(header.classList.contains('open')) { //close ham menu
        body.classList.remove('noscroll')
        header.classList.remove('open')
        fades.forEach(function(element){
            element.classList.remove('fade-in')
            element.classList.add('fade-out')
        })
    }
    else { //open ham menu
        body.classList.add('noscroll')
        header.classList.add('open')
        fades.forEach(function(element){
            element.classList.remove('fade-out')
            element.classList.add('fade-in')
        })
    
    }
});