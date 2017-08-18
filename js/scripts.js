//Business Logic

function numberArray(n) {
var arrs = [];
for (var i=0; i <= n; i++) {
  arrs.push(i);
  alert(arrs);
}
};

function pingPong(n) {
  if (n % 15 === 0) {
    alert('Ping-Pong');
  } else if (n % 3 === 0) {
    alert('Ping');
  } else if (n % 5 === 0) {
      alert('Pong');
  } else {
    alert(n);
  }
};





















//User Interface Logic
$(document).ready(function() {
  $('#pingPong').submit(function(event) {
    event.preventDefault();
    var n = $('#userInputNumber').val();
    //alert(n);
    pingPong(n);
    numberArray(n);
  });
});
