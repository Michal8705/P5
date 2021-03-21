var a;
var b;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  createCanvas(windowWidth, windowHeight);
  background(100, 100, 200);
  text(window.innerWidth,50,90,50,50)
  text(window.innerHeight,50,110,50,50)
  text(windowWidth,50,130,50,50)
  text(windowHeight,50,150,50,50)
  text(window.screen.width,50,170,50,50)
  text(window.screen.height,50,190,50,50)
  text(displayWidth,50,210,50,50)
  text(displayHeight,50,230,50,50)
  if(windowWidth > windowHeight && displayWidth > displayHeight){
   a = windowWidth;
   b = windowHeight
  }else{
   a = displayHeight;
   b = displayWidth
  }
}

// function windowResized() {
//   resizeCanvas(a,b);
// }