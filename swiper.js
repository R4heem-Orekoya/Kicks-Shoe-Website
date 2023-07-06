const swiper = new Swiper('.swiper', {
    // Optional parameters
      loop: true,
  
    // If we need pagination
    pagination: {
          el: '.swiper-pagination',
          clickable: true,
      },
  
        // Responsive breakpoints
    breakpoints: {
          // when window width is >= 0px
        0: {
              slidesPerView: 1,
              spaceBetween: 20
        }
    },
  
    autoplay: {
          delay: 3000,
    },
});