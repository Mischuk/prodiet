function sidebarCategories() {
  $('.m_sidebar-categories .dropdown-aside-header a').on('click', function(){
    $(this).parent().parent().toggleClass('open');
  });

  $('.dropdown-aside-categories-header a').on('click', function(){
    $(this).parent().toggleClass('open');
  });
};
sidebarCategories();