// $(function(){
//   $('#mycarousel').carousel();
// });
$('#mycarousel').carousel();

$('#sidebar').affix({
  offset: {
    top: 250
  }
});

$(window).ready(function() {
  $('#hamburger').click(function() {
    if ($(this).hasClass('open')) {
      $(this).removeClass('open');
      $('#nav').removeClass('open');
    } else {
      $(this).addClass('open');
      $('#nav').addClass('open');
    }
  });
});

// $('body').scrollspy();

// $('#sidebar').on('activate.bs.scrollspy', function () {
//   alert();
// })
