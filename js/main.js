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
  console.log('Built with love by awesome people:\nRachel (rlim2@buffalo.edu)\nDarren (zhanhuil@buffalo.edu)');
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
