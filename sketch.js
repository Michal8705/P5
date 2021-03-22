var a = 1;
var b = 0;

function setup() {
  createCanvas(window.visualViewport.width, window.visualViewport.height);
}

function draw() {
  background(200, 100, 200);
  b = b + 1;
  text(window.innerWidth,50,90,50,50)
  text(window.innerHeight,50,110,50,50)
  text(windowWidth,50,130,50,50)
  text(windowHeight,50,150,50,50)
  text(window.screen.width,50,170,50,50)
  text(window.screen.height,50,190,50,50)
  text(window.visualViewport.width,50,210,50,50)
  text(window.visualViewport.height,50,230,50,50)
  text(document.documentElement.clientWidth, 50,250,50,50);
  text(document.documentElement.clientHeight, 50,270,50,50);
  text(b, 50,290,50,50);

  // if((document.documentElement.clientWidth != windowWidth ||
  //    document.documentElement.clientHeight != windowHeight) && a == 1){
  //  window.restore();  
  //  a = 0;
  // }
}

function windowResized() {
  clear();
  setup();
  // resizeCanvas(document.documentElement.clientWidth,document.documentElement.clientHeight);
}