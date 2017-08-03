$(function() {
    $('a[href="#"]').click(function(e){ e.preventDefault(); });

    /*! http://johnpolacek.github.io/imagefill.js/ */
    // $('.item').imagefill();

    /*! http://www.jacklmoore.com/autosize/ */
    autosize($('textarea'));


    /*! https://select2.github.io/ */
    $('select').select2({
      minimumResultsForSearch: Infinity
    });

    $('.delivery-self-list').perfectScrollbar();

    /*! Inputs mask*/
    function inputMask() {
      $(".mask-date").mask("99.99.9999",{placeholder:"__.__.____"});
      $(".mask-year").mask("9999",{placeholder:""});
      $(".mask-tel").mask("+7 (999) 999-99-99",{placeholder:"X"});
    };
    inputMask();

    function sticky_footer() {
      var bumpIt = function() {
        $('body').css('margin-bottom', $('.m_footer').outerHeight());
      }, didResize = false;
      bumpIt();

      $(window).resize(function() {
        didResize = true;
      });

      setInterval(function() {
        if(didResize) {
          didResize = false;
          bumpIt();
        }
      }, 250);
    }
    sticky_footer();


    function expansion_panel() {
      $('.expansion-panel li .ep-header').on('click', function(){
        $(this).next().slideToggle(300);
        $(this).toggleClass('is-open');
      });
    }
    expansion_panel();


    function ripples_effect() {
      var ink, d, x, y;
      $(".ripple").click(function(e){
        if($(this).find(".ink").length === 0){
            $(this).prepend("<span class='ink'></span>");
        }

        ink = $(this).find(".ink");
        ink.removeClass("animate");

        if(!ink.height() && !ink.width()){
            d = Math.max($(this).outerWidth(), $(this).outerHeight());
            ink.css({height: d, width: d});
        }

        x = e.pageX - $(this).offset().left - ink.width()/2;
        y = e.pageY - $(this).offset().top - ink.height()/2;

        ink.css({top: y+'px', left: x+'px'}).addClass("animate");
      });
    }
    ripples_effect();

    function modals() {
      $('.btn-modal').magnificPopup({
        type: 'inline',
        fixedContentPos: false,
        fixedBgPos: true,
        overflowY: 'auto',
        closeBtnInside: true,
        preloader: false,
        midClick: true,
        removalDelay: 300,
        mainClass: 'my-mfp-zoom-in'
      });
    }
    modals();

    function responsive_table() {
      $('table').wrap('<div class="responsive-table" />');
    }
    responsive_table();

    function open_success_popup() {
      $.magnificPopup.close();

      setTimeout(function(){
        $.magnificPopup.open({
          items: {
              src: ty_type,
          },
          type: 'inline',
          fixedContentPos: false,
          fixedBgPos: true,
          overflowY: 'auto',
          closeBtnInside: true,
          preloader: false,
          midClick: true,
          removalDelay: 300,
          mainClass: 'my-mfp-zoom-in'
        });
      },300);


    }
    $('.success_popup').on('submit', function(){
      if ( $(this).attr('id') == 'ty-comments') {
        ty_type = '#modal-ty-comments';
      } else if ( $(this).parents('.modal').attr('id') == 'modal-simple-add-to-cart' ) {
        ty_type = '#modal-ty-simple';
      } else {
        ty_type = '#modal-ty';
      }
      open_success_popup();
      return false;
    });

    function counter_item() {
      $('.qtyplus').click(function(e){
        e.preventDefault();
        fieldName = $(this).attr('field');
        var currentVal = parseInt($('input[name='+fieldName+']').val());
        if (!isNaN(currentVal)) {
          $('input[name='+fieldName+']').val(currentVal + 1);
        } else {
          $('input[name='+fieldName+']').val(0);
        }
      });
      $(".qtyminus").click(function(e) {
        e.preventDefault();
        fieldName = $(this).attr('field');
        var currentVal = parseInt($('input[name='+fieldName+']').val());
        if (!isNaN(currentVal) && currentVal > 0) {
          $('input[name='+fieldName+']').val(currentVal - 1);
        } else {
          $('input[name='+fieldName+']').val(0);
        }
      });
    }
    counter_item();

    function lead_carousels() {
      $('.zxc').slick({
        dots: false,
        arrows: true,
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
    }
    lead_carousels();

    function add_comments() {
      $('.add-comments a').on('click', function(){
        $('html, body').animate({
          scrollTop: $('.m_comments form').offset().top - 15
        }, '500')
      });

      $('.set-rating a').hover(
        function() {
          $(this).prevAll().addClass('full');
        },
        function() {
          $('.set-rating a').removeClass('full');
        }
      );

      $('.set-rating a').on('click', function(){
        $('.set-rating a').removeClass('checked');
        $(this).addClass('checked');
        $(this).prevAll().addClass('checked');
      });


    }
    add_comments();

    if ( $('#map').length ) {
      ymaps.ready(init);
      function init () {
        var myMap = new ymaps.Map("map", {
                center: [55.8083, 37.5868],
                zoom: 16,
                controls: ['zoomControl']
            }),
        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
                    hintContent: 'Собственный значок метки',
                    balloonContent: 'Это красивая метка'
                }, {
                    iconLayout: 'default#image',
                    iconImageHref: 'images/marker.png',
                    iconImageSize: [57, 68],
                    iconImageOffset: [-29, -68]
        });
        myMap.geoObjects.add(myPlacemark);
        myMap.behaviors.disable('scrollZoom');
      }
    }

    //=include modules.js
});