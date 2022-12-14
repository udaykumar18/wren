const hamburgerMenu = document.getElementById("toggle");
const sliderBar = document.getElementById("menu");
hamburgerMenu.onclick = function () {
  hamburgerMenu.classList.toggle("active");
  sliderBar.classList.toggle("active");
};
