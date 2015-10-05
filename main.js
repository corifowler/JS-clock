setInterval( function() {
  var date = new Date();
  var hr = date.getHours();
  var min = date.getMinutes();
  var secs = date.getSeconds();

  var hrs = (hr < 10) ? ('0' + hr) : hr;
  var mins = (min < 10) ? ('0' + min) : min;
  var seconds = (secs < 10) ? ('0' + secs) : secs;
  var fullTimestamp = hrs + ':' + mins + ':' + seconds;
  
  $('#timestamp').text(fullTimestamp);

}, 1000);



