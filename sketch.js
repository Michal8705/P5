var table1;
var table2;
var r1 = 0;
var g1 = 0;
var b1 = 0;
var ster1 = 0;
var ster2 = 0;
var name1 = "";
var name2 = "";

function preload() {
 table1 = loadJSON("swiat4.json");
// table2 = loadJSON("swiat.json");
}

function mousePressed() {
 if (mouseButton === LEFT) {
  print(mouseY*2000+mouseX);
  // print(pixels[mouseY*2000*4+mouseX*4]);
  // print(pixels[mouseY*2000*4+mouseX*4+1]);
  // print(pixels[mouseY*2000*4+mouseX*4+2]);
 } 
}

function setup() {
 createCanvas(2000, 2000);
 background(0);
//  pixelDensity(0);
}  
  
function draw() {

  
 loadPixels();
  
 for(a = 0; a < height*width*4; a = a+4) {
  ster2 = table1.titles[a/4];
  
//  if(ster2 > 999 || ster2 == 15){
  if(ster2 > 0 && ster2 != 500){
   pixels[a] = 180;
  }
  if(ster2 == 500){
   pixels[a+1] = 180;
  }
  
  
 }
 
 
 
 
 // for(a = 0; a < height*width*4; a = a+4) {
 //  r1 = table2.titles[a];
 //  g1 = table2.titles[a+1];
 //  b1 = table2.titles[a+2];
 
 // pixels[a] = r1;
 // pixels[a+1] = g1;
 // pixels[a+2] = b1;
 // pixels[a+3] = table2.titles[a+3]; 
 // }
 updatePixels();  
}