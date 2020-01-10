// Select the elements on the page - canvas, shake button
const canvas = document.querySelector('#etch-a-sketch');

const ctx = canvas.getContext('2d');
const shakeButton = document.querySelector('.shake');

// setup our canvas for drawing
// short hand for const width = canvas.width;
// short hand for const width = canvas.height;x
// make a variable called height and width from the same properties on our canvas
const { width, height } = canvas;

// create random x and y starting point on the canvas 
let x = Math.floor(Math.random() * width;);

console.log(width, height);
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 10;

ctx.beginPath(); // start the drawing
ctx.moveTo(200, 200);
ctx.lineTo(200, 200);
ctx.stroke();

// write a draw function

// write a handler for the MSMediaKeySession

// clear /shke function

// listen for arrow keys
