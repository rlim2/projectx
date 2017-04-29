$(window).ready(function() {

   $(window).scroll(function() {
     var scrollTop = $(window).scrollTop();
     if (scrollTop === 0) {
       $('#sidebar ul li:first-child').addClass('active');
     }
   });

});
