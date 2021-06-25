(function($) {
  "use strict";
  
 // menu 
  $('.siteBar-btn').click( function (){ 
    $('.mobile-menu').toggleClass('siteBar');   
  }); 

  
  // mainSlider
  function mainSlider() {
    var BasicSlider = $(".slider-active");
    BasicSlider.on("init", function(e, slick) {
      var $firstAnimatingElements = $(".single-slider:first-child").find(
        "[data-animation]"
      );
      doAnimations($firstAnimatingElements);
    });
    BasicSlider.on("beforeChange", function(e, slick, currentSlide, nextSlide) {
      var $animatingElements = $(
        '.single-slider[data-slick-index="' + nextSlide + '"]'
      ).find("[data-animation]");
      doAnimations($animatingElements);
    });
    BasicSlider.slick({
      autoplay: false,
      autoplaySpeed: 10000,
      dots: false,
      fade: true,
      arrows: true,
      prevArrow:
        '<button type="button" class="slick-prev"><i class="ti-shift-left"></i></button>',
      nextArrow:
        '<button type="button" class="slick-next"><i class="ti-shift-right"></i></button>',
      responsive: [
        { breakpoint: 767, settings: { dots: false, arrows: false } }
      ]
    });

    function doAnimations(elements) {
      var animationEndEvents =
        "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend";
      elements.each(function() {
        var $this = $(this);
        var $animationDelay = $this.data("delay");
        var $animationType = "animated " + $this.data("animation");
        $this.css({
          "animation-delay": $animationDelay,
          "-webkit-animation-delay": $animationDelay
        });
        $this.addClass($animationType).one(animationEndEvents, function() {
          $this.removeClass($animationType);
        });
      });
    }
  }
  mainSlider();


  // owlCarousel
  $(".Review_slider").owlCarousel({
    loop: true,
    autoplay:true,
    margin: 30,
    items: 3,
    navText: [
      '<i class="fa fa-angle-left"></i>',
      '<i class="fa fa-angle-right"></i>'
    ],
    nav: true,
    dots: false,
    responsive: {
      0: {
        items: 1
      },
      767: {
        items: 2
      },
      992: {
        items: 3
      }
    }
  });


  $(".item_price1").click(function(){
    $(this).addClass("active");
    $(".item_price2").removeClass("active");
    $(".item_price3").removeClass("active");
});
$(".item_price2").click(function(){
    $(this).addClass("active");
    $(".item_price1").removeClass("active");
    $(".item_price3").removeClass("active");
});
$(".item_price3").click(function(){
    $(this).addClass("active");
    $(".item_price1").removeClass("active");
    $(".item_price2").removeClass("active");
});

 
})(jQuery);
