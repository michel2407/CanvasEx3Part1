var canvas  = document.querySelector('#car');
var context = canvas.getContext('2d');

context.fillStyle = 'green';
context.fillRect(100, 250, 300, 100);

context.fillStyle = 'green';
context.fillRect(150, 200, 200, 50);

context.beginPath();
context.arc(150, 400, 50, 0, Math.PI * 2);
context.stroke();
context.fillStyle = 'grey'
context.closePath();
context.fill();

context.beginPath();
context.arc(350, 400, 50, 0, Math.PI * 2);
context.closePath();
context.stroke();
context.fillStyle = 'grey'
context.fill();
