let menuBtn = document.querySelector('.header__menu-button');
let nav = document.querySelector('.nav')

menuBtn.addEventListener('click', function (){
  menuBtn.classList.remove('header__menu-button--active');
  menuBtn.classList.toggle('header__menu-button--active');
  nav.classList.remove('nav--active');
  nav.classList.toggle('nav--active');
})
