function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0, 200, 100);
   if (window.DeviceOrientationEvent) { 
  window.addEventListener('orientationchange', function() { 
   location.reload(); },
   false); }
}

function windowResized() {
 if (window.DeviceOrientationEvent) { 
  window.addEventListener('orientationchange', function() { 
   location.reload(); },
   false); }
  resizeCanvas(windowWidth, windowHeight);
}
