// @codekit-prepend "owl.carousel.min.js";
// @codekit-prepend  "sidr.js";

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
          1000:{
              items:3,
              nav:false,
              dots:true,
              slideBy:3
          }
      }
  });
});

$(document).ready(function() {
    $('#mobile-menu').sidr({
      name: 'mobile-menu-section',
      source: '#mobile-menu-content'
    });
});
