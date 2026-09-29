const headerMenuBtn = document.querySelector(".header__menu-btn");
const navPanel = document.querySelector(".nav-panel");
const bodyElement = document.querySelector("body");
const overlayElement = document.querySelector(".header__overlay");

const togglePanel = function () {
  navPanel.classList.toggle("nav-panel__open");
  overlayElement.classList.toggle("header__overlay--active");
  headerMenuBtn.classList.toggle("header__menu-btn--active");

  const isPanelOpen = navPanel.classList.contains("nav-panel__open");

  headerMenuBtn.setAttribute("aria-expanded", isPanelOpen);

  bodyElement.classList.toggle("no-scroll");
};

headerMenuBtn.addEventListener("click", togglePanel);

overlayElement.addEventListener("click", togglePanel);
