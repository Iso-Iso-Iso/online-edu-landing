const slider = new Swiper(".swiper", {
  spaceBetween: 30,
  slidesPerView: 1,
  loop: true,
  navigation: {
    nextEl: ".button-next",
    prevEl: ".button-prev",
  },
  autoplay: {
    delay: 5000,
  },
  breakpoints: {
    1024: { slidesPerView: 3 },
    768: { slidesPerView: 2 },
    0: { slidesPerView: 1 },
  },
});
