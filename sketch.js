function setup() {
  pixelDensity(2);
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(100, 100, 100);
  text(window.innerWidth,50,50,50,50)
  text(window.innerHeight,50,70,50,50)
  text(windowWidth,50,130,50,50)
  text(windowHeight,50,150,50,50)
}

function windowResized() {
  resizeCanvas(windowWidth,windowHeight);
}