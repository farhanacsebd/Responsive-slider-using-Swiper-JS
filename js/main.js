// swiper
var swiper = new Swiper(".bike-slider", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets:true,
      clickable: true,
    },
autoplay:{
  delay:5000,
  clickable:true,
},

    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
      900: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
    },
  });