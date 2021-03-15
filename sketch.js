function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(100, 100, 100);
  //  if (window.DeviceOrientationEvent) { 
  // window.addEventListener('orientationchange', function() { 
  //  location.reload(); },
  //  false); }
}

function windowResized() {
 if (window.DeviceOrientationEvent) { 
  window.addEventListener('orientationchange', function() { 
   location.reload(); },
   false); }
//  resizeCanvas(windowWidth, windowHeight);
}
