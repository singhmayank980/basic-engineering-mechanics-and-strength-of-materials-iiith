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
{ // rectangle 1 colour
  fill(0);
  rect(310,200,180,20);
  // rectangle 2 colour
  rect(310,550,180,20);
  // code for brown block
  fill(139,69,19);
  rect(360,45,80,45,15);
}
function windowResized() {
  centerCanvas();
}