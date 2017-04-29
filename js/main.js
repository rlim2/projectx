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
      // $('')
    } else {
      $(this).addClass('open');
    }
  });
});

// $('body').scrollspy();

// $('#sidebar').on('activate.bs.scrollspy', function () {
//   alert();
// })
