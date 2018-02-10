$(document).ready(function() {

    $('.gif a img').hover(
      function() {
        var gif = $(this).parent().attr('data-gif');
        $(this).attr('src', gif);
      }, function() {
        $(this).attr('src', $(this).attr('data-orig'));
      });

    $('#times a').click(
      function() {
        var clicked = $(this).attr('id');
        $('#current').attr('src', '../assets/coffee/' + clicked + '.jpg');
      });

    $('#screen a').click(
      function() {
        var clicked = $(this).attr('id');
        $('#current-screen').attr('src', '../assets/ers/screen' + clicked + '.jpg');
      }
    )

});
