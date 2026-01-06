var swiper = new Swiper(".medical-sol-swiper", {
  slidesPerView: 4,
  spaceBetween: 30,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  navigation: {
    nextEl: ".medical-sol-swiper-next",
    prevEl: ".medical-sol-swiper-prev",
  },

  breakpoints: {
    1200: { slidesPerView: 4 },
    992: { slidesPerView: 3 },
    768: { slidesPerView: 2 },
    480: { slidesPerView: 1 },
  },
  loop: "true",
});
