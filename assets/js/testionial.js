document.addEventListener("DOMContentLoaded", () => {
  /* ======================================================
     TESTIMONIAL SWIPER (THUMBS + MAIN)
     ====================================================== */

  // MAIN CONTENT (RIGHT SIDE)
  const testimonialMain = new Swiper(".testimonial-main", {
    slidesPerView: 1,
    effect: "fade",
    fadeEffect: { crossFade: true },
    allowTouchMove: false,
    autoHeight: true,
    loop: false, // controlled manually
  });

  // THUMBNAILS (LEFT SIDE)
  const testimonialThumbs = new Swiper(".testimonial-thumbs", {
    direction: "vertical",
    slidesPerView: 3,
    spaceBetween: 20,
    allowTouchMove: false,
    watchSlidesProgress: true,
    loop: true, // infinite thumbs
  });

  const totalSlides = testimonialMain.slides.length;
  const thumbSlides = testimonialThumbs.slides;

  const prevBtn = document.querySelector(
    ".testimonial-section .eqi-swiper-prev"
  );
  const nextBtn = document.querySelector(
    ".testimonial-section .eqi-swiper-next"
  );

  // ------------------ CORE SYNC FUNCTION ------------------
  function syncActive(index) {
    // normalize index (safe for loop)
    const realIndex = ((index % totalSlides) + totalSlides) % totalSlides;

    // move main slide
    testimonialMain.slideTo(realIndex, 500);

    // move thumbs (loop-safe)
    testimonialThumbs.slideToLoop(realIndex, 500);

    // clear classes
    thumbSlides.forEach((slide) => {
      slide.classList.remove("swiper-slide-thumb-active", "is-center");
    });

    // add active + center class
    const activeThumb = testimonialThumbs.slides[testimonialThumbs.activeIndex];

    if (activeThumb) {
      activeThumb.classList.add("swiper-slide-thumb-active", "is-center");
    }
  }

  // ------------------ INITIAL STATE ------------------
  syncActive(0);

  // ------------------ THUMB CLICK ------------------
  testimonialThumbs.slides.forEach((slide, index) => {
    slide.addEventListener("click", () => {
      syncActive(index);
    });
  });

  // ------------------ ARROW NAV ------------------
  nextBtn?.addEventListener("click", () => {
    syncActive(testimonialMain.activeIndex + 1);
  });

  prevBtn?.addEventListener("click", () => {
    syncActive(testimonialMain.activeIndex - 1);
  });
});
