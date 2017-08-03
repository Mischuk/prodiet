$(function() {
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
      $(window).resize(topItems_carousels);
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
    function displayCatalogItems() {
      $('.m_catalog-items .display-row').on('click', function(){
        $('.m_catalog-items .list').addClass('display-row');
        $('.m_catalog-items .display-grid').removeClass('current');
        $(this).addClass('current');
      });
      $('.m_catalog-items .display-grid').on('click', function(){
        $('.m_catalog-items .list').removeClass('display-row');
        $('.m_catalog-items .display-row').removeClass('current');
        $(this).addClass('current');
      });
    };
    displayCatalogItems();
    $('.catalog-recipes-carousel').slick({
    function mobileMenu() {
    function lead_carousel() {
    function stepsOrder() {
      // Step 1 functional
      $('.step-1 .default-icon').on('click', function(){
        $('.delivery-form').hide();
        $(this).next().show();
      });
      $('.step-1 .default-icon-active').on('click', function(){
        $(this).parent().hide();
      });
      // Get data from form
      $('.delivery-self-list a').on('click', function(){
        $('input[name="delivery-self-address"]').val($(this).parent().find('.address').text());
      });
      // Step 1
      $('[data-order-delivery]').on('click', function(){
        $('[data-order-delivery]').removeClass('selected');
        $(this).addClass('selected');
        $('.delivery-self-list').perfectScrollbar('update');
        var orderDelivery = $(this).attr('data-order-delivery');
        $('[data-order="delivery"]').text(orderDelivery);
        if ( orderDelivery == 'Самовывоз' ) {
          $('[data-order="address"]').text('-');
        }
        $('.step-1 .step-next').on('click', function(){
          if ( orderDelivery == 'Самовывоз' ) {
            if ( !$('input[name="delivery-self-address"]').val() == '' ) {
              $('[data-order="address"]').html($('input[name="delivery-self-address"]').val());
              $(this).parents('.step').addClass('complete').removeClass('current').next().addClass('current');
              $('html, body').animate({
                scrollTop: $(".step-2").offset().top - 20
              }, 500);
            } else {
              return false;
            }
          } else {
            var i = 0;
            var inputs = $('[data-order-delivery].selected input.required').length;
            $('[data-order-delivery].selected input.required').each(function(){
              if ( $(this).val() == '' ) {
                $(this).focus();
                return false;
              } else {
                i++
              };
              if ( i == inputs ) {
                var orderAddress = $('[data-order-delivery].selected input.order-delivery-address').val();
                var orderIndex = $('[data-order-delivery].selected input.order-delivery-index').val();
                $('[data-order="address"]').html(orderIndex+', '+orderAddress);
                $(this).parents('.step').addClass('complete').removeClass('current').next().addClass('current');
                $('html, body').animate({
                  scrollTop: $(".step-2").offset().top - 20
                }, 500);
              };
            });
          }
        });
      });
      // Step 2
      $('.step-2 .step-next').on('click', function(){
        var orderDay = $('.order-date-day').val();
        var orderMonth = $('.order-date-month').val();
        var orderFrom = $('.order-date-from').val();
        var orderTo = $('.order-date-to').val();
        if ( orderDay == '') {
          orderDay = '-';
        }
        if ( orderMonth == '') {
          orderMonth = '-';
        }
        var step2resultDate = orderDay +' '+ orderMonth;
        if ( !orderFrom == '') {
          var step2resultFrom =  'с '+orderFrom+' ';
        } else {
          step2resultFrom = '-';
        }
        if ( !orderTo == '') {
          var step2resultTo =  'до '+orderTo;
        } else {
          step2resultTo = ' -';
        }
        var step2resultTime = step2resultFrom + step2resultTo;
        $('[data-order="time"]').html(step2resultDate+', '+step2resultTime);
        $(this).parents('.step').addClass('complete').removeClass('current').next().addClass('current');
        $('html, body').animate({
          scrollTop: $(".step-3").offset().top - 20
        }, 500);
      });
      $('.step-prev').on('click', function(){
        $(this).parents('.step').removeClass('current').prev().addClass('current');
        $('html, body').animate({
          scrollTop: $(this).parents('.step').prev().offset().top - 20
        }, 500);
      });
      $('.form-pay input').on('change', function(){
        if ( $(this).prop('checked') ) {
          $('.form-pay input').prop('checked', false);
          $(this).prop('checked', true);
        }
      });
      // Step 3
      $('.step-3 .step-next').on('click', function(){
        $('[name="order-pay"]').each(function(){
          if ( $(this).prop('checked') ) {
            $('[data-order="pay"]').html($(this).val());
          }
        });
        var c = 0;
        var checkboxes = $('[name="order-pay"]').length;
        $('[name="order-pay"]').each(function(){
          if ( $(this).prop('checked') ) {
            return false;
          } else {
            c++
          };
        });
        if ( c == checkboxes ) {
          return false;
        } else {
          $(this).parents('.step').addClass('complete').removeClass('current').next().addClass('current');
          $('html, body').animate({
            scrollTop: $(".step-4").offset().top - 20
          }, 500);
        }
      });
      // Step 4    
      $('.order-steps').validate({
          submit: {
              settings: {
                  clear: "keypress",
                  button: '.step-4 button.step-next'
              },
              callback: {
                onError: function() {
                  $('#step-4-email').focus();
                },
                onSubmit: function() {
                  var i = 0;
                  var inputs = $('.step-4 input.required').length;
                  $('.step-4 input.required').each(function(){
                    if ( $(this).val() == '' ) {
                      $(this).focus();
                      return false;
                    } else {
                      i++
                    };
                    if ( i == inputs ) {
                      var orderName = $('.order-delivery-name').val();
                      var orderEmail = $('.order-delivery-email').val();
                      var orderTel = $('.order-delivery-tel').val();
                      $('[data-order="username"]').html(orderName);
                      $('[data-order="email"]').html(orderEmail);
                      $('[data-order="tel"]').html(orderTel);
                      $(this).parents('.step').addClass('complete').removeClass('current').next().addClass('current');
                      $('html, body').animate({
                        scrollTop: $(".step-final").offset().top - 20
                      }, 500);
                    };
                  });
                  return false;
                }
              }
          }
      });
      $('.step-prev').on('click', function(){
        $(this).parents('.step').removeClass('current').prev().addClass('current');
        $('html, body').animate({
          scrollTop: $(this).parents('.step').prev().offset().top - 20
        }, 500);
      });
    };
    stepsOrder();
    function sidebarCategories() {
      $('.m_sidebar-categories .dropdown-aside-header a').on('click', function(){
        $(this).parent().parent().toggleClass('open');
      });
      $('.dropdown-aside-categories-header a').on('click', function(){
        $(this).parent().toggleClass('open');
      });
    };
    sidebarCategories();