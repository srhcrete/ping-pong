//Business Logic

  //**function numberArray pushes inegers from 1 up to the input number into empty array and applies pingPong function to each item in the array
var arrs = [];
function numberArray(n) {
for (var i=1; i <= n; i++) {
  arrs.push(i);
  pingPong(i);
}
};

  //**function pingPong checks each item in a array for a ping-pong number case, applies the rule for the case, and prints the results to <ul>
var resultsArrs = [];
function pingPong(i) {
  if (i % 15 === 0) {
    i = 'Ping-Pong';
    $('#numberList').append('<li>' + i + '</li>');
  } else if (i % 3 === 0) {
      i = 'Ping';
      $('#numberList').append('<li>' + i + '</li>');
    } else if (i % 5 === 0) {
      i = 'Pong';
      $('#numberList').append('<li>' + i + '</li>');
        } else {
          $('#numberList').append('<li>' + i + '</li>');
          }
};

//User Interface Logic
$(document).ready(function() {
  $('#pingPong').submit(function(event) {
    event.preventDefault();
    var n = $('#userInputNumber').val();
    numberArray(n);

    $( "#refresh" ).click(function() {
   location.reload(true);
   });
  });
});
