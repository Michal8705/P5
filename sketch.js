var img;
var table1;


function preload() {
 table1 = loadJSON("swiat.json");

}
function setup() {
createCanvas (500, 500);
background(50);
 
// print(table1.titles.length);
 loadPixels();
 pixelDensity(1);
 
 for(i = 0; i < table1.titles.length; i = i+4) {
  pixels[i] = table1.titles[i];
  pixels[i+1] = table1.titles[i+1];
  pixels[i+2] = table1.titles[i+2];
  pixels[i+3] = table1.titles[i+3];
 }
 updatePixels(); 
}


