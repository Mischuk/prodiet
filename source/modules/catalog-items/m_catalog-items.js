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