$(document).ready(function() {

  $( "#show" ).click(function() {
    $("html").toggleClass("reflection-style");
    $(".info").toggle();
    $(".reflection").toggle();
  });

});
