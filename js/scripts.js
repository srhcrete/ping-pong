//Business Logic























//User Interface Logic
$(document).ready(function() {
  $('#pingPong').submit(function(event) {
    event.preventDefault();
    var userInputNumber = $('#userInputNumber').val();
    alert(userInputNumber);
  });
});
