$(document).ready(function () {
  $(".header__bar , .offcanvas-overlay").click(function () {
    $(".offcanvas-area , .offcanvas-overlay").addClass("active");
  });
  $(".menu-close , .offcanvas-overlay").click(function () {
    $(".offcanvas-area , .offcanvas-overlay").removeClass("active");
  });

$('.member__slider').owlCarousel({
  items: 1,
  slidesToShow: 1,
  loop: true,
  margin: 22,
  nav: true,
  navText: ['<img src="assets/img/arrow_angle.svg" alt="">','<img src="assets/img/arrow_angle.svg" alt="">'],
  dot: false,
  responsive: {
    400: {
        items: 1
    },
    500: {
        items: 1
    },
    600: {
        items: 2
    },
    1000: {
        items: 3
    },
    
    1200: {
        items: 3
    },
    1300: {
      items: 4
  }
}
});

});
