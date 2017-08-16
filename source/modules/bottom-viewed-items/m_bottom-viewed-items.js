function topItemsCarousel() {
  function topItems_carousels() {
    $('.top-item-carousels').on('init', function(event, slick){
      $('body').addClass('top-items-carousel-initialed');
      $('.top-item-carousels').addClass('op1');
    });

    if ( $(window).width() < 460 ) {
      console.log('rows 1');
      if ( !$('.m_top-items').hasClass('rows-1') ) {
        $('.m_top-items').removeClass('rows-2 normal');
        $('.m_top-items').addClass('rows-1');
        if ( $('body').hasClass('top-items-carousel-initialed') ) {
          $('.top-item-carousels').slick('unslick');
        }

        $('.top-item-carousels').slick({
          dots: false,
          arrows: false,
          rows: 2,
          slidesPerRow: 1,
          infinite: false,
          swipeToSlide: true
        });
      }
    } else if ( $(window).width() >= 460 && $(window).width() < 768 ) {
      console.log('rows 2');
      if ( !$('.m_top-items').hasClass('rows-2') ) {
        $('.m_top-items').removeClass('rows-1 normal');
        $('.m_top-items').addClass('rows-2');
        if ( $('body').hasClass('top-items-carousel-initialed') ) {
          $('.top-item-carousels').slick('unslick');
        }
        $('.top-item-carousels').slick({
          dots: false,
          arrows: false,
          rows: 2,
          slidesPerRow: 2,
          infinite: false,
          swipeToSlide: true
        });
      }
    } else if ( $(window).width() >= 768 ){
      if ( !$('.m_top-items').hasClass('normal') ) {
        console.log('one');
        $('.m_top-items').removeClass('rows-1 rows-2');
        $('.m_top-items').addClass('normal');
        if ( $('body').hasClass('top-items-carousel-initialed') ) {
          $('.top-item-carousels').slick('unslick');
        }
        $('.top-item-carousels').slick({
          dots: false,
          arrows: false,
          slidesToShow: 3,
          infinite: false,
          swipeToSlide: true,
          mobileFirst: true,
          responsive: [
            {
              breakpoint: 991,
              settings: {
                slidesToShow: 4
              }
            },
            {
              breakpoint: 1330,
              settings: {
                arrows: true,
                slidesToShow: 4
              }
            }
          ]
        });

        $('.articles .top-item-carousels').slick('unslick');
        $('.articles .top-item-carousels').slick({
          dots: false,
          arrows: false,
          slidesToShow: 3,
          infinite: false,
          swipeToSlide: true,
          mobileFirst: true,
          responsive: [
            {
              breakpoint: 991,
              settings: {
                slidesToShow: 3,
                arrows: false
              }
            },
            {
              breakpoint: 1330,
              settings: {
                arrows: true,
                slidesToShow: 3
              }
            }
          ]
        });

      }
    }
  }

  topItems_carousels();
  // $(window).resize(topItems_carousels);

  $(window).resize($.throttle(topItems_carousels, 1500));

  var $topItemsNav = $('.top-items-nav a');
  $topItemsNav.on('click', function(){
    if ( !$(this).hasClass('current') ) {
      $topItemsNav.removeClass('current');
      $(this).addClass('current');
      var eq = $(this).index();
      $('.top-items-content .top-item-carousels').removeClass('enabled').addClass('disabled');
      $('.top-items-loader').addClass('show');
      $('.m_top-items .action').hide();
      setTimeout(function(){
        $('.top-items-loader').removeClass('show');
        $('.top-items-content .top-item-carousels').eq(eq).addClass('enabled');
        $('.m_top-items .action').show();
        $('.top-item-carousels').slick('setPosition');
      }, 1000);
    } else {
      return false;
    }
  });
};
topItemsCarousel();


