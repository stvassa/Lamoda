// Указать город который будет фиксироваться в строке
const headerCityButton = document.querySelector('.header__city-button');

// Можно двумя вариантами выводить информицию: 1 вариант: if (localStorage.getItem('lomoda-location')) {
//   headerCityButton.textContent = localStorage.getItem('lomoda-location')
// }

// 2 вариант:
headerCityButton.textContent = localStorage.getItem('lomoda-location') || 'Ваш город?';


headerCityButton.addEventListener('click', () => {
  // prompt - окно с вопросом (тот что в скобках)
  const city = prompt('Укажите Ваш город');
  headerCityButton.textContent = city;
  localStorage.setItem('lomoda-location', city)
});

// блокировка скрола

const disaibleScroll = () => {
  const widthScroll = window.innerWidth - document.body.offsetWidth;

  document.body.dbScrolly = window.scrollY;

  document.body.style.cssText = `
  position: fixed;
  top: ${-window.scrollY}px;
  left: 0;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  padding-right: ${widthScroll}px;
  `;
};
// разблокировка скрола

const enableScroll = () => {
  document.body.style.cssText = '';
  window.scroll({
    top: document.body.dbScrolly,
  })
};

// модальное окно

const subheaderCart = document.querySelector('.subheader__cart');
const cartOverlay = document.querySelector('.cart-overlay');

const cartModalOpen = () => {
  cartOverlay.classList.add('cart-overlay-open');
  disaibleScroll();
};

const cartModalClose = () => {
  cartOverlay.classList.remove('cart-overlay-open');
  enableScroll();
};

subheaderCart.addEventListener('click', cartModalOpen);

cartOverlay.addEventListener('click', event => {
  const target = event.target;

  if (target.matches('.cart__btn-close') || target.matches('.cart-overlay')) {
    cartModalClose();
  }
});