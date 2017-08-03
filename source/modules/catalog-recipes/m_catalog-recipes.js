$('.catalog-recipes-carousel').slick({
  dots: false,
  arrows: true,
  slidesToShow: 1,
  infinite: false,
  swipeToSlide: true,
  mobileFirst: true,
  responsive: [
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 4
      }
    }
  ]
});