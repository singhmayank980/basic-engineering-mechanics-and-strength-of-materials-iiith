var cnv;

function centerCanvas() {
  var x = (windowWidth - width) / 2 ;
  var y = (windowHeight - height) / 2;
  cnv.position(x, y);
}

function setup() {
  cnv = createCanvas(800, 600);
  centerCanvas();
  background(255, 255, 255);
  
}
function draw() 
{
  
}
function windowResized() {
  centerCanvas();
}