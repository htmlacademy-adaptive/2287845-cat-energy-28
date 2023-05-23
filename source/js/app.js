const burgerMenu = () => {
  const menuButton = document.querySelector('.header__menu-button');
  const nav = document.querySelector('.nav');

  function handleClickBurgerButton() {
    menuButton .classList.toggle('header__menu-button--active');
    nav.classList.toggle('nav--active');
  }

  menuButton.classList.remove('header__menu-button--active');
  nav.classList.remove('nav--active');

  menuButton.addEventListener('click', handleClickBurgerButton);
}

document.addEventListener("DOMContentLoaded", burgerMenu);
