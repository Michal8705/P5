function setup() {
  pixelDensity(2);
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(100, 200, 200);
  text(window.innerWidth,50,50,50,50)
  text(window.innerHeight,50,70,50,50)
  text(windowWidth,50,130,50,50)
  text(windowHeight,50,150,50,50)
}

function windowResized() {
 var w = window.innerWidth;
 var h = window.innerHeight;
 var dw0 = displayWidth;
 var dh0 = displayHeight;
 var dw;
 var dh;
 if ( w > h ) {
  if ( dw0 > dh0 ) {
   dw = dw0;
   dh = dh0;
  } else {
   dw = dh0;
   dh = dw0;
  }
 } else {
  if ( dw0 < dh0 ) {
   dw = dw0;
   dh = dh0;
  } else {
   dw = dh0;
   dh = dw0;
  }
 }
  resizeCanvas(dw,dh);
}