document.addEventListener("DOMContentLoaded", function () {
  const menuOpen = document.querySelector("header .menu .menu__icon");
  const menuClose = document.querySelector("header .menu__close");
  const menuContent = document.querySelector(".menu__content");

  menuOpen.addEventListener("click", () => {
    menuContent.classList.add("active");
  });

  menuClose.addEventListener("click", () => {
    menuContent.classList.remove("active");
  });
});
