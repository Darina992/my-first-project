$(function(){
  var menu = $(".menu");
  var burgerMenu = $(".header_burger_conteiner");
  var windowWidth = $(window).width();
  $(window).on("resize",function(){
    windowWidth = $(window).width();
    console.log(windowWidth);//выводим ширину экрана в консоль для удобства
  })


$(window).on("scroll", function(){
  var windowScrollTopValue = $(window).scrollTop();
//добавляем фиксированное меню(для экрана больше 820рх-обычное меню,меньше 820рх-бургер-меню) при скролле вниз
  if (windowWidth > 820) {
    if (windowScrollTopValue > 40){
      menu.addClass("menu-fixed");
    } else {
      menu.removeClass("menu-fixed");
    }
  } else {
    if (windowScrollTopValue > 40){
      burgerMenu.addClass("burger_menu-fixed");
    } else {
      burgerMenu.removeClass("burger_menu-fixed");
    }
  }

  })
  //при нажатии на бургер меню добавляем/убираем класс active у menu(открывается/закрывается скрытое меню) и header_burger
  $('.header_burger').on("click",function(){
    $('.menu, .header_burger').toggleClass('active');
  })
  //button to-top(a.up)
  var toTop = $(".up"); // выбираем кнопку to-top
  var body = $("html, body");

  toTop.on("click", toTopClicked); //обрабатываем клик по ссылке

  function toTopClicked(e) {
      e.preventDefault(); //отменить действие по умолчанию т.е. переход по ссылке
      body.animate(
          { scrollTop: 0 },
          1500
      );
  }
});


//wow-эффекты
new WOW().init();
//
