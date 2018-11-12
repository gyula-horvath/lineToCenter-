var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');

var cw = canvas.width;
var ch = canvas.height;

var random = function(max) {
  return Math.floor(Math.random()*max);
}

function lineToCenter(x, y, color){
  context.beginPath();
  context.moveTo(x, y);
  context.lineTo(cw/2, ch/2);
  context.strokeStyle = color;
  context.stroke();
}

for (var i = 0; i < 100; i++){
  lineToCenter(random(cw), random(ch), 'blue');
}
