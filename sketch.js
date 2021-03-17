function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(200, 200, 200);
  text(window.innerHeight,50,50,50,50)
  text(window.innerWidth,50,70,50,50)
  text(displayWidth,50,90,50,50)
  text(displayHeight,50,110,50,50)
  text(windowWidth,50,130,50,50)
  text(windowHeight,50,150,50,50)
}

function windowResized() {
  resizeCanvas(displayWidth,displayHeight);
}