function lead_carousel() {
  $('.m_lead-carousel').slick({
    arrows: false,
    dots: true,
    fade: true,
    speed:1500,
    mobileFirst: true,
    responsive: [
      {
        breakpoint: 1330,
        settings: {
          arrows: true
        }
      }
    ]
  });
}
lead_carousel();