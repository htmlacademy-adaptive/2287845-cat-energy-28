let menuBtn = document.querySelector('.header__menu-button');
let nav = document.querySelector('.nav')

menuBtn.classList.remove('header__menu-button--active');
nav.classList.remove('nav--active');

menuBtn.addEventListener('click', function (){
  menuBtn.classList.toggle('header__menu-button--active');
  nav.classList.toggle('nav--active');
})
