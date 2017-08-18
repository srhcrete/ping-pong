//Business Logic

function pingPong(n) {
//for (var i=0; i <= n; i++) {
  if (n % 15 === 0) {
    alert('Ping-Pong');
  } else if (n % 3 === 0) {
    alert('Ping');
  } else if (n % 5 === 0) {
      alert('Pong');
  }
//}
};





















//User Interface Logic
$(document).ready(function() {
  $('#pingPong').submit(function(event) {
    event.preventDefault();
    var n = $('#userInputNumber').val();
    //alert(n);
    pingPong(n);
  });
});
