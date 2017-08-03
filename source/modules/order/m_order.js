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