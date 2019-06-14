var cnv;
var use =45;
var e =0;
var t=45;
var c = 0;
var start =0;
var my = 5.8;
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
 fill(12,101,145);
 noStroke();
  textSize(18);
text('Compression test on spring', innerWidth / 2 - 400, 25);
  // rectangle 1 colour
  fill(0);
  noStroke();
  
  rect(310,200+e,180,20);

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
   stroke(128,128,0);
   strokeWeight(4);
   arc(400, 245+my*c*1.07, 60+c, 50-c, 0.785, 4.5);
   arc(400, 280+my*c*1.01, 60+c, 50-0.5*c, 0.785, 5.5);
   arc(400, 315+my*c, 60+c, 50-0.5*c, 0.785, 5.5);
   arc(400, 350+my*c, 60+c, 50-0.5*c, 0.785, 5.5);
   arc(400, 385+my*c, 60+c, 50-0.5*c, 0.785, 5.5);
   arc(400, 420+my*c, 60+c, 50-0.5*c, 0.785, 5.5);
   arc(400, 455+my*c*0.8, 60+c, 50-2*c, 0.785, 5.5);
   arc(403, 490+my*c/2, 60+1.5*c, 50-2*c, 0.785, 5.5);
   arc(403, 525+c, 60+1.5*c, 50-2*c, 2, 5.5);
   
   

}

function move()
{
  if(t<155)  
  {
    t=t+1;
    use = use+1
    
  }
  if(use==155)
  {
     if(e<120)
     {
       e=e+1;
       t= t+1;
       c= c+0.15;
     }
  }
 
}

function temp()
{start =1;    
}
function windowResized() {
  centerCanvas();
}
