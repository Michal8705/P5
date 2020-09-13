var table1;
var table2;
var r1 = 0;
var g1 = 0;
var b1 = 0;
var ster1 = 0;
var ster2 = 0;
var ster3 = 0;
var ster4 = 0;
var ster5 = 0;
var name1 = "";
var name2 = "";


// function preload() {
//  table1 = loadJSON("swiat2.json");
//  table2 = loadJSON("kraje.json");
// }

// function mousePressed() {
//  if (mouseButton === LEFT) {
// //  print(mouseY*2000+mouseX);
//   // print(pixels[mouseY*2000*4+mouseX*4]);
//   // print(pixels[mouseY*2000*4+mouseX*4+1]);
//   // print(pixels[mouseY*2000*4+mouseX*4+2]);
//   ster3 = table1.titles[mouseY*2000+mouseX];
//  } 
// }

// function mouseMoved() {
//  ster3 = table1.titles[mouseY*2000+mouseX];
//  ster4 = mouseX;
//  ster5 = mouseY;
// }

function setup() {
 createCanvas(2000, 2000);
 pixelDensity(1.0); 
 background(0);

}  
  

function draw() {

 // loadPixels();
  
 // for(a = 0; a < height*width*4; a = a+4) {
 //  ster2 = table1.titles[a/4];
  
 //  if(ster2 > 0 && ster2 < 500){
 //   pixels[a] = 200;
 //   pixels[a+1] = 200;
 //   pixels[a+2] = 200;
 //  }
 //  if(ster2 == 500){
 //   pixels[a] = 0;
 //   pixels[a+1] = 0;
 //   pixels[a+2] = 0;
 //  }
 //  if(ster2 > 500){
 //   pixels[a] = 100;
 //   pixels[a+1] = 100;
 //   pixels[a+2] = 100;
 //  }
 //  if(ster2 == 0){
 //   pixels[a] = 200;
 //   pixels[a+1] = 200;
 //   pixels[a+2] = 200;
 //  }
 //  if(ster3 != 0 && ster3 < 500 && ster2 == ster3){
 //   pixels[a] = ster3;
 //   pixels[a+1] = 100;
 //   pixels[a+2] = 100;
 //  }
 // }  
 // updatePixels();
   strokeWeight(4);
  fill(255, 255, 255,100);
  rect(400, 400, 250, 50, 20);
 // if(ster3 != 0 && ster3 < 500){
 //  name1 = table2.titles[ster3-1].country.name;
 //  strokeWeight(4);
 //  fill(255, 255, 255,100);
 //  rect(ster4, ster5-30, 250, 50, 20);
 //  fill(0);
 //  textSize(20);
 //  text(name1,ster4+10, ster5);
 // }
}