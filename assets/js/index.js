// Nav Toggler Start
const navToggle = document.querySelector(".nav-toggle");
const navCollapse = document.querySelector(".nav-collapse");

navToggle.addEventListener("click", () => {
  navToggle.classList.toggle("active");
  navCollapse.classList.toggle("active");
});
// Nav Toggler End

// Top Quality Swiper Start
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
    1200: { slidesPerView: 3 },
    992: { slidesPerView: 2 },
    768: { slidesPerView: 2 },
    480: { slidesPerView: 1 },
    320: { slidesPerView: 1 },
  },
  loop: "true",
});
// Top Quality Swiper End

// Top Equipment Swiper Start
var swiper = new Swiper(".eqi-swiper", {
  slidesPerView: 4,
  spaceBetween: 30,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  navigation: {
    nextEl: ".eqi-swiper-next",
    prevEl: ".eqi-swiper-prev",
  },

  breakpoints: {
    1200: { slidesPerView: 3 },
    992: { slidesPerView: 2 },
    768: { slidesPerView: 2 },
    480: { slidesPerView: 1 },
    320: { slidesPerView: 1 },
  },
  loop: "true",
});
// Top Equipment Swiper End

// Accodian Our Partner Start
const accordionItems = document.querySelectorAll(".accordion-item");

accordionItems.forEach((item) => {
  const header = item.querySelector(".accordion-header");

  header.addEventListener("click", () => {
    accordionItems.forEach((i) => i.classList.remove("active"));
    item.classList.toggle("active");
  });
});
// Accodian Our Partner End

// Blog Card Swiper Start
var swiper = new Swiper(".blog-swiper", {
  slidesPerView: 4,
  spaceBetween: 30,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  navigation: {
    nextEl: ".blog-swiper-next",
    prevEl: ".blog-swiper-prev",
  },

  breakpoints: {
    1200: { slidesPerView: 3 },
    992: { slidesPerView: 2 },
    768: { slidesPerView: 2 },
    480: { slidesPerView: 1 },
    320: { slidesPerView: 1 },
  },
  loop: "true",
});
// Blog Card Swiper End
// Our Team Start
var swiper = new Swiper(".team-swiper", {
  slidesPerView: 4,
  spaceBetween: 30,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  navigation: {
    nextEl: ".team-swiper-next",
    prevEl: ".team-swiper-prev",
  },

  breakpoints: {
    1200: { slidesPerView: 4 },
    992: { slidesPerView: 2 },
    768: { slidesPerView: 2 },
    480: { slidesPerView: 1 },
    320: { slidesPerView: 1 },
  },
  loop: "true",
});
// Our Team End