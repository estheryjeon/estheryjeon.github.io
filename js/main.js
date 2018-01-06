$(document).ready(function() {

    $('.gif a img').hover(
      function() {
        var gif = $(this).parent().attr('data-gif');
        console.log(gif);
        $(this).attr('src', gif);
      }, function() {
        $(this).attr('src', $(this).attr('data-orig'));
      });

});
