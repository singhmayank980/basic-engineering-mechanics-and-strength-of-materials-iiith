var cnv;
var t=45;
var start =0;
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
{ background(255,255,255);
  // rectangle 1 colour
  fill(0);
  noStroke();
  rect(310,200,180,20);
  // rectangle 2 colour
  rect(310,550,180,20);
  // code for brown block
  fill(139,69,19);
  noStroke();
  rect(360,t,80,45,15);
     
   if(start==1)
   {
     move();
   }
   noFill();  
   stroke(139,69,19);
   strokeWeight(4);
   arc(400, 245, 60, 50, 0.785, 4.5);;
   arc(400, 280, 60, 50, 0.785, 5.5);
   arc(400, 315, 60, 50, 0.785, 5.5);
   arc(400, 350, 60, 50, 0.785, 5.5);
   arc(400, 385, 60, 50, 0.785, 5.5);
   arc(400, 420, 60, 50, 0.785, 5.5);
   arc(400, 455, 60, 50, 0.785, 5.5);
   arc(400, 490, 60, 50, 0.785, 5.5);
   arc(400, 525, 60, 50, 2, 5.5);
}

function move()
{
  if(t<155)  
  t= t+1; 
}
function temp()
{start =1;    
}
function windowResized() {
  centerCanvas();
}
