//Business Logic

  //**function numberArray pushes integers from 1 up to the input number into empty array and applies pingPong function to each item in the array
var arrs = [];
function numberArray(n) {
for (var i=1; i <= n; i++) {
  arrs.push(i);
  pingPong(i);
}
alert(arrs);

};

  //**function pingPong alerts according to Ping-Pong rules from number input
var resultsArrs = [];
function pingPong(i) {
  if (i % 15 === 0) {
    i = 'Ping-Pong';
    $('#numberList').append('<li>' + i + '</li>');
    //resultsArrs.push(i);
    //alert(i);
  } else if (i % 3 === 0) {
      i = 'Ping';
      $('#numberList').append('<li>' + i + '</li>');
      //alert(i);
      //resultsArrs.push(i);
    } else if (i % 5 === 0) {
      i = 'Pong';
      $('#numberList').append('<li>' + i + '</li>');
      //alert(i);
      //resultsArrs.push(i);
        } else {
          $('#numberList').append('<li>' + i + '</li>');
          //alert(i);
          //resultsArrs.push(i);
          }
  //alert(resultsArrs);
};

//listResults(resultsArrs[i]);


  //**function results appends the results of pingPong function to the <ul> in the html
// function listResults(result) {
//     $('#numberList').append('<li>' + i + '</li>');
//

//User Interface Logic
$(document).ready(function() {
  $('#pingPong').submit(function(event) {
    event.preventDefault();
    var n = $('#userInputNumber').val();
    //pingPong(n);
    numberArray(n);
    //alert(resultsArrs);
    //listResults(resultsArrs);
    //results(arrs);
  });
});
