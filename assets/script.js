

  var swiper = new Swiper(".mySwiper", {
    effect:"coverflow",
    slidesPerView: 3,
    spaceBetween: 40,
    centeredSlides: true,
    grabCursor: true,
    loop: true,
    autoplay:{
      delay:3000,
      disableOnInteraction:false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

