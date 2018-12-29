$(document).ready(function() {

  // password protect
  $('.password').on('click', function () {
    var testV = 1;
    var pass1 = prompt('Please Enter Your Password',' ');
    while (testV < 100) {
      if (pass1 == null ) {
        return;
      }
      if (!pass1)
        history.go(-1);
      if (pass1.toLowerCase() == config.ADVIL_KEY) {
        window.open('projects/advil.html','_self');
        break;
      }
      testV+=1;
      var pass1 = prompt('Incorrect Password, Please Try Again.',' ');
    }
    /*if (pass1.toLowerCase()!="password" & testV ==3)
      history.go(0);*/
    return "";
  });


});
