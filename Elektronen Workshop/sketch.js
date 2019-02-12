var myCanvas, button, x;

function setup(){
  myCanvas = createCanvas(windowWidth, 500);
  myCanvas.parent('canvas-box');
  frameRate(60);
  x = 0;
  noCursor();
}

function draw(){
  background(120);
  fill(255);
  noStroke();
  ellipse(mouseX, mouseY, 40);
  stroke(255);
  //line(x, 0, x, 500);
  x = x + 1;
}
