addEventListener("load", function () { setTimeout(hideURLbar, 0); }, true); function hideURLbar() { window.scrollTo(0, 1); }

new WOW().init();



$(window).load(function () {
  $("#flexiselDemo3").flexisel({
    visibleItems: 4,
    animationSpeed: 1000,
    autoPlay: true,
    autoPlaySpeed: 3000,
    pauseOnHover: true,
    enableResponsiveBreakpoints: true,
    responsiveBreakpoints: {
      portrait: {
        changePoint: 480,
        visibleItems: 1
      },
      landscape: {
        changePoint: 640,
        visibleItems: 2
      },
      tablet: {
        changePoint: 768,
        visibleItems: 2
      }
    }
  });

});

$(function () {
  $('#cbp-fwslider').cbpFWSlider();

});

// Add content to Header and footer
$(function () {
  $('header').load('html/header.html')
})
$(function () {
  $('footer').load('html/footer.html')
})