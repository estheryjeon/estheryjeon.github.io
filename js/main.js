$(document).ready(function() {

/*
  function hoverActive(link, des) {
    if ($(link).hasClass('active')) {
      $(des).css('visibility', 'visible');
    } else {
      $(link).hover(function() {
        $(des).css('visibility','visible');
        }, function() {
        $(des).css('visibility','hidden');
      })
    }
  }

  hoverActive('#work','#made');*/


  if ($('#smile').hasClass('active')) {
    $('#smile').css('opacity', '1');
  } else {
    $('#smile').css('opacity', '0.5');
    $('#smile').hover(function() {
      $(this).css('opacity','1');
      }, function() {
      $(this).css('opacity','0.5');
    })}


});
