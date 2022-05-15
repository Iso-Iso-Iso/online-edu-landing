const burgerBtn = document.querySelector("#burger-btn");
const bergerMenu = document.querySelector("#burger-menu");

burgerBtn.addEventListener("click", () => {
  burgerBtn.classList.toggle("burger_active");
  bergerMenu.classList.toggle("burger-menu_active");
});
