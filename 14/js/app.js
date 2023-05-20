let menuBtn = document.querySelector('.header__menu-button');
let nav = document.querySelector('.nav')

menuBtn.addEventListener('click', function (){
  menuBtn.classList.toggle('header__menu-button--active');
  nav.classList.toggle('nav--active');
})
