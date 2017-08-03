$(function() {    $('a[href="#"]').click(function(e){ e.preventDefault(); });    /*! http://johnpolacek.github.io/imagefill.js/ */    // $('.item').imagefill();    /*! http://www.jacklmoore.com/autosize/ */    autosize($('textarea'));    /*! https://select2.github.io/ */    $('select').select2({      minimumResultsForSearch: Infinity    });    $('.delivery-self-list').perfectScrollbar();    /*! Inputs mask*/    function inputMask() {      $(".mask-date").mask("99.99.9999",{placeholder:"__.__.____"});      $(".mask-year").mask("9999",{placeholder:""});      $(".mask-tel").mask("+7 (999) 999-99-99",{placeholder:"X"});    };    inputMask();    function sticky_footer() {      var bumpIt = function() {        $('body').css('margin-bottom', $('.m_footer').outerHeight());      }, didResize = false;      bumpIt();      $(window).resize(function() {        didResize = true;      });      setInterval(function() {        if(didResize) {          didResize = false;          bumpIt();        }      }, 250);    }    sticky_footer();    function expansion_panel() {      $('.expansion-panel li .ep-header').on('click', function(){        $(this).next().slideToggle(300);        $(this).toggleClass('is-open');      });    }    expansion_panel();    function ripples_effect() {      var ink, d, x, y;      $(".ripple").click(function(e){        if($(this).find(".ink").length === 0){            $(this).prepend("<span class='ink'></span>");        }        ink = $(this).find(".ink");        ink.removeClass("animate");        if(!ink.height() && !ink.width()){            d = Math.max($(this).outerWidth(), $(this).outerHeight());            ink.css({height: d, width: d});        }        x = e.pageX - $(this).offset().left - ink.width()/2;        y = e.pageY - $(this).offset().top - ink.height()/2;        ink.css({top: y+'px', left: x+'px'}).addClass("animate");      });    }    ripples_effect();    function modals() {      $('.btn-modal').magnificPopup({        type: 'inline',        fixedContentPos: false,        fixedBgPos: true,        overflowY: 'auto',        closeBtnInside: true,        preloader: false,        midClick: true,        removalDelay: 300,        mainClass: 'my-mfp-zoom-in'      });    }    modals();    function responsive_table() {      $('table').wrap('<div class="responsive-table" />');    }    responsive_table();    function open_success_popup() {      $.magnificPopup.close();      setTimeout(function(){        $.magnificPopup.open({          items: {              src: ty_type,          },          type: 'inline',          fixedContentPos: false,          fixedBgPos: true,          overflowY: 'auto',          closeBtnInside: true,          preloader: false,          midClick: true,          removalDelay: 300,          mainClass: 'my-mfp-zoom-in'        });      },300);    }    $('.success_popup').on('submit', function(){      if ( $(this).attr('id') == 'ty-comments') {        ty_type = '#modal-ty-comments';      } else if ( $(this).parents('.modal').attr('id') == 'modal-simple-add-to-cart' ) {        ty_type = '#modal-ty-simple';      } else {        ty_type = '#modal-ty';      }      open_success_popup();      return false;    });    function counter_item() {      $('.qtyplus').click(function(e){        e.preventDefault();        fieldName = $(this).attr('field');        var currentVal = parseInt($('input[name='+fieldName+']').val());        if (!isNaN(currentVal)) {          $('input[name='+fieldName+']').val(currentVal + 1);        } else {          $('input[name='+fieldName+']').val(0);        }      });      $(".qtyminus").click(function(e) {        e.preventDefault();        fieldName = $(this).attr('field');        var currentVal = parseInt($('input[name='+fieldName+']').val());        if (!isNaN(currentVal) && currentVal > 0) {          $('input[name='+fieldName+']').val(currentVal - 1);        } else {          $('input[name='+fieldName+']').val(0);        }      });    }    counter_item();    function lead_carousels() {      $('.zxc').slick({        dots: false,        arrows: true,        slidesToShow: 3,        infinite: false,        swipeToSlide: true,        mobileFirst: true,        responsive: [          {            breakpoint: 991,            settings: {              slidesToShow: 4            }          },          {            breakpoint: 1330,            settings: {              arrows: true,              slidesToShow: 4            }          }        ]      });    }    lead_carousels();    function add_comments() {      $('.add-comments a').on('click', function(){        $('html, body').animate({          scrollTop: $('.m_comments form').offset().top - 15        }, '500')      });      $('.set-rating a').hover(        function() {          $(this).prevAll().addClass('full');        },        function() {          $('.set-rating a').removeClass('full');        }      );      $('.set-rating a').on('click', function(){        $('.set-rating a').removeClass('checked');        $(this).addClass('checked');        $(this).prevAll().addClass('checked');      });    }    add_comments();    if ( $('#map').length ) {      ymaps.ready(init);      function init () {        var myMap = new ymaps.Map("map", {                center: [55.8083, 37.5868],                zoom: 16,                controls: ['zoomControl']            }),        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {                    hintContent: 'Собственный значок метки',                    balloonContent: 'Это красивая метка'                }, {                    iconLayout: 'default#image',                    iconImageHref: 'images/marker.png',                    iconImageSize: [57, 68],                    iconImageOffset: [-29, -68]        });        myMap.geoObjects.add(myPlacemark);        myMap.behaviors.disable('scrollZoom');      }    }    function topItemsCarousel() {
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
    $('.catalog-recipes-carousel').slick({      dots: false,      arrows: true,      slidesToShow: 1,      infinite: false,      swipeToSlide: true,      mobileFirst: true,      responsive: [        {          breakpoint: 480,          settings: {            slidesToShow: 2          }        },        {          breakpoint: 768,          settings: {            slidesToShow: 3          }        },        {          breakpoint: 992,          settings: {            slidesToShow: 4          }        }      ]    });
    function mobileMenu() {      var $backdrop = $('.backdrop');      var $mobile_menu_button = $('.btn-mobile-menu');      var $mobile_menu = $('.responsive-menu');      $mobile_menu_button.on('click', function(){        $(this).toggleClass('is-open');        $backdrop.fadeToggle('300');        $mobile_menu.toggleClass('is-open');      });      $backdrop.on('click', function(){        $(this).fadeOut('300');        $mobile_menu_button.removeClass('is-open');        $mobile_menu.removeClass('is-open');      });    }    mobileMenu();    function mobileSearch() {      var $mobile_search_button = $('.btn-mobile-search');      $mobile_search_button.on('click', function(){        $('.m_header .search').addClass('is-open');        $('.m_header .search').find('input').focus();      });      $('.m_header .search input').on('blur', function(){        $('.m_header .search').removeClass('is-open');      });    }    mobileSearch();
    function lead_carousel() {      $('.m_lead-carousel').slick({        arrows: false,        dots: true,        fade: true,        speed:1500,        mobileFirst: true,        responsive: [          {            breakpoint: 1330,            settings: {              arrows: true            }          }        ]      });    }    lead_carousel();
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
    sidebarCategories();});