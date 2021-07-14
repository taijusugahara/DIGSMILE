$(function(){
  $('.menu').on('click',function(){
      $('.nav-btn').toggleClass('-active');
      $('.burger').toggleClass('-active');
  });
});

$(function () {
  $(window).on("scroll", function () {
    const sliderHeight = $("header").height();
    if (sliderHeight -50 < $(this).scrollTop()) {
      $(".menu").addClass("menu_scroll");
    } else {
      $(".menu").removeClass("menu_scroll");
    }
  });
});

// リンククリック時に移動
$('a[href^="#"]').click(function(){
  var speed = 500;
  var href= $(this).attr("href");
  var target = $(href == "#" || href == "" ? 'html' : href);
  var position = target.offset().top;
  $("html, body").animate({scrollTop:position-85}, speed, "swing");
  // バーガー時のリンククリック時はバーガー画面を外す
  $('.nav-btn').removeClass('-active');
  $('.burger').removeClass('-active');
  return false;
});