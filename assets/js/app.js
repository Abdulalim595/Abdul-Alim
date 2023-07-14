$(document).ready(function () {
  $(".header__bar , .offcanvas-overlay").click(function () {
    $(".offcanvas-area , .offcanvas-overlay").addClass("active");
  });
  $(".menu-close , .offcanvas-overlay").click(function () {
    $(".offcanvas-area , .offcanvas-overlay").removeClass("active");
  });

  $(window).on("scroll", function () {
    var scroll = $(window).scrollTop();
    if (scroll < 5) {
      $(".header").removeClass("scroll-header");
    } else {
      $(".header").addClass("scroll-header");
    }
  });
});
