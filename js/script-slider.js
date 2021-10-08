$(document).ready(function(){

  //slider появляется на экране меньше 750рх
  $(window).on('load resize',function(){ //при загрузке странице и резайзе
    var windowWidth = $(window).width();
    if (windowWidth < 750) {
      slicky();
    } else {
      $('.cakes_prices').filter('.slick-initialized').slick('unslick');//выключаем слайдер только там где он включен
      $('.cupcakes_prices').filter('.slick-initialized').slick('unslick');
    }
    });

function slicky() {
    $('.cakes_prices').not('.slick-initialized').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
        {
          breakpoint: 620,
          settings: {
            slidesToShow: 1,
          }
        }
      ]
    });
    $('.cupcakes_prices').not('.slick-initialized').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
        {
          breakpoint: 620,
          settings: {
            slidesToShow: 1,
          }
        }
      ]
    });
  }

  //main slider
  $('.slider_conteiner').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2300,
  });
});
