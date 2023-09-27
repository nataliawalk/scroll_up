const button = $('.button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    button.addClass('show');
  } else {
    button.removeClass('show');
  }
});

button.on('click', function(e) {
  e.preventDefault();
  $('html').animate({scrollTop:0}, '300');
});