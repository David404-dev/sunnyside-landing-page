const hamburgetMenuIcon = document.querySelector(".hamburger-menu-img");
const mobileMenu = document.querySelector(".mobile-menu");

// Hamburger menu open/close
hamburgetMenuIcon.addEventListener("click", function () {
  mobileMenu.classList.toggle("flex");
});
