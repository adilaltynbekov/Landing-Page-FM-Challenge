const headerMenuBtn = document.querySelector(".header__menu-btn");
const navPanel = document.querySelector(".nav-panel");
const headerOverlay = document.querySelector(".header__overlay");
const bodyElement = document.querySelector('body');

headerMenuBtn.addEventListener("click", function () {
  navPanel.classList.toggle("nav-panel__open");
  headerOverlay.classList.toggle("header__overlay--active");
  headerMenuBtn.classList.toggle('header__menu-btn--active');

  const isPanelOpen = navPanel.classList.contains('nav-panel__open');

  headerMenuBtn.setAttribute('aria-expanded', isPanelOpen)

  bodyElement.classList.toggle('no-scroll');
});
