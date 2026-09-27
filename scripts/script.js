const headerMenuBtn = document.querySelector('.header__menu-btn');
const navPanel = document.querySelector('.nav-panel');
const headerOverlay = document.querySelector('.header__overlay');

headerMenuBtn.addEventListener('click', function() {
  console.log('123')
  navPanel.classList.toggle("nav-panel__open");
  headerOverlay.classList.toggle('header__overlay--active')
})


