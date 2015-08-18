// @codekit-prepend "owl.carousel.min.js";
// @codekit-prepend "slidebars.min.js";

$(document).ready(function(){
  $('.owl-carousel').owlCarousel({
      loop:true,
      margin:10,
      responsiveClass:true,
      responsive:{
          0:{
              items:1,
              nav:false,
              dots:true,
          },
          600:{
              items:2,
              nav:false,
              dots:true,
              slideBy:2
          },
          900:{
              items:3,
              dots:true,
              slideBy:3,
              autoplay:true,
              responsiveRefreshRate:200,
              navigation:true
          }
      }
  });
});

(function($) {
  $(document).ready(function() {
    $.slidebars();
  });
}) (jQuery);
