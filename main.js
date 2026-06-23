$(document).ready(function() {
  
  $(window).scroll(function () {
      
      console.log($(window).scrollTop())
    if ($(window).scrollTop() > 970) {
      $('#nav').addClass('navbar-fixed');
    }
    if ($(window).scrollTop() < 970) {
      $('#nav').removeClass('navbar-fixed');
    }
  });
});

