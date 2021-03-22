var a = 1;
var b;

function setup() {
  createCanvas(document.documentElement.clientWidth, document.documentElement.clientHeight);
  background(200, 200, 100);
}

function draw() {
  // background(100, 200, 100);
  text(window.innerWidth,50,90,50,50)
  text(window.innerHeight,50,110,50,50)
  text(windowWidth,50,130,50,50)
  text(windowHeight,50,150,50,50)
  text(window.screen.width,50,170,50,50)
  text(window.screen.height,50,190,50,50)
  text(displayWidth,50,210,50,50)
  text(displayHeight,50,230,50,50)
  text(document.documentElement.clientWidth, 50,250,50,50);
  text(document.documentElement.clientHeight, 50,270,50,50);

  if((document.documentElement.clientWidth != windowWidth ||
     document.documentElement.clientHeight != windowHeight) && a == 1){
  resizeCanvas(windowWidth,windowHeight);
  text(document.documentElement.clientHeight, 50,310,50,50);
  a = 0;
  }
}

function windowResized() {
  resizeCanvas(document.documentElement.clientWidth,document.documentElement.clientHeight);
}