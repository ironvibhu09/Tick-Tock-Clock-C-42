function setup() {
  createCanvas(450,450);
  angleMode(DEGREES);
}

function draw() {

  background(0);

var eye1 = ellipse(140,170,40,60);
var eye2 = ellipse(260,170,40,60);
var eyebrow1 = arc(140,170,10,10,20,20);
fill("black");
var ineye1 = ellipse(140,170,30,50);
var ineye2 = ellipse(260,170,30,50);



translate(200,200)
rotate (-90);

  let hr = hour();
  let mn = minute();
  let sc = second();
  
  strokeWeight(8);
  stroke(255,152,0);
  noFill();
  let end = map(sc,0,60,0,360);
  arc(0,0,300,300,0,end);
  
  stroke("red");
  let end2 = map(mn,0,60,0,360);
  arc(0,0,280,280,0,end2);
  
  stroke(5,253,0);
  let end3 = map(hr%12,0,12,-0,360);
  arc(0,0,260,260,0,end3);
  
  push();
  rotate(end);
  stroke(255,152,0);
  line(0,0,100,0);
  pop();
  
  
  push();
  rotate(end2);
  stroke("red");
  line(0,0,75,0);
  pop();
  
  push();
  rotate(end3);
  stroke(5,253,0);
  line(0,0,50,0);
  pop();
  
}
  
  