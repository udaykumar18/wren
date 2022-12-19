const hamburgerMenu = document.getElementById("toggle");
const sliderBar = document.getElementById("menu");
hamburgerMenu.onclick = function () {
  hamburgerMenu.classList.toggle("active");
  sliderBar.classList.toggle("active");
};

// SWIPER JS

//swiper js
const swiper = new Swiper(".swiper", {
  loop: true,
  spaceBetween: 20,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 2,
  coverflowEffect: {
    rotate: 30,
    stretch: 0,
    depth: 300,
    modifier: 1,
    slideShadows: true,
  },
  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
