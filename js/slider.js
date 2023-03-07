const swiper = new Swiper(".swiper", {
  // Optional parameters
  loop: true,
  slidesPerView: 2,
  breakpoints: {
    // when window width is >= 480px
    480: {
        slidesPerView: 1,
    },
    // when window width is >= 640px
    640: {
        slidesPerView: 2,
    },
  },
  // spaceBetween: 10,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});
