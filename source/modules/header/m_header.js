function mobileMenu() {
  var $backdrop = $('.backdrop');
  var $mobile_menu_button = $('.btn-mobile-menu');
  var $mobile_menu = $('.responsive-menu');

  $mobile_menu_button.on('click', function(){
    $(this).toggleClass('is-open');
    $backdrop.fadeToggle('300');
    $mobile_menu.toggleClass('is-open');
  });

  $backdrop.on('click', function(){
    $(this).fadeOut('300');
    $mobile_menu_button.removeClass('is-open');
    $mobile_menu.removeClass('is-open');
  });
}
mobileMenu();

function mobileSearch() {
  var $mobile_search_button = $('.btn-mobile-search');
  $mobile_search_button.on('click', function(){
    $('.m_header .search').addClass('is-open');
    $('.m_header .search').find('input').focus();
  });

  $('.m_header .search input').on('blur', function(){
    $('.m_header .search').removeClass('is-open');
  });
}
mobileSearch();