const burgerMenuIcon = document.querySelector('.logo-mobile-menu');
const menuBurger = document.querySelector('.menu-burger');
const closeBtn = document.querySelector('.close');

// Функция для отображения бургер-меню
function showMenu() {
  menuBurger.style.display = 'block';
}

// Функция для скрытия бургер-меню
function hideMenu() {
  menuBurger.style.display = 'none';
}

// Обработчик клика по иконке бургер-меню
burgerMenuIcon.addEventListener('click', showMenu);

// Обработчик клика по кнопке закрытия
closeBtn.addEventListener('click', hideMenu);


const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  slidesPerView: 2,
  spaceBetween: 24,


});