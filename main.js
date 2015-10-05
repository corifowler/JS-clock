// Get time variables

var date = new Date();
var hr = date.getHours();
var min = date.getMinutes();
var secs = date.getSeconds();

var fullTimestamp = hr + ':' + min + ':' + secs;

var clock = document.querySelector('#timestamp');
var textNode = document.createTextNode(fullTimestamp);
clock.appendChild(textNode);

