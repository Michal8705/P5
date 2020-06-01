var table1 = [];
var mapSum = 50;  
var ster = 1;
var rand1 = -10;
var rand2 = 10;
var m = 0;
var n = 0;
var z = 0;
var minRange = -50;
var maxRange = 50;

function setup() {
  createCanvas(600, 600);
  pixelDensity(1);
  var canvSize = width*height/(ster*ster);

  for(let map1Times = 0; map1Times < mapSum; map1Times++) {  
        
    for(let x = 0; x < width/ster; x++) {      
      for(let y = 0; y < height/ster; y++) {
        
//                  MAP        

        if (x == 0 && map1Times == 0){
          table1.push(random(minRange,maxRange));
        }
          

        if (x > 0 && y == 0 && map1Times == 0){
          table1.push(min(maxRange,max(minRange,
                (table1[table1.length - height/ster]+
                 table1[table1.length - height/ster+1])/2+
                   random(rand1,rand2))));
        }

        if (x > 0 && y == height/ster-1 && map1Times == 0){
          table1.push(min(maxRange,max(minRange,
                (table1[table1.length - height/ster]+
                 table1[table1.length - height/ster-1])/2+
                   random(rand1,rand2))));
        }
        
        
        if (x > 0 && y != 0 && y != height/ster-1 && map1Times == 0){
          table1.push(min(maxRange,max(minRange,
                (table1[table1.length - height/ster]+
                 table1[table1.length - height/ster-1]+
                 table1[table1.length - height/ster+1])/3+
                   random(rand1,rand2))));
        }
        
//                  MAP2        
        
        
        if (x == 0 && map1Times > 0){
          table1.push(min(maxRange,max(minRange,
                table1[table1.length - canvSize]+
                   random(rand1,rand2))));
        }
          

        if (x > 0 && y == 0 && map1Times > 0){
          table1.push(min(maxRange,max(minRange,
                (table1[table1.length - height/ster]+
                 table1[table1.length - height/ster+1])/2+
                   random(rand1,rand2))));
        }

        if (x > 0 && y == height/ster-1 && map1Times > 0){
          table1.push(min(maxRange,max(minRange,
                (table1[table1.length - height/ster]+
                 table1[table1.length - height/ster-1])/2+
                   random(rand1,rand2))));
        }
        
        
        if (x > 0 && y != 0 && y != height/ster-1 && map1Times > 0){
          table1.push(min(maxRange,max(minRange,
                (table1[table1.length - height/ster]+
                 table1[table1.length - height/ster-1]+
                 table1[table1.length - height/ster+1])/3+
                   random(rand1,rand2))));
        }
        
      }
    }
  }
}
      
function draw() {
   background(220);
  m = m + 1;
  canvSizeDraw = 360000;
  var r = 0;
  var g = 0;
  var b = 0;
  var rangeSize = (maxRange - minRange)/6;
   
  
  if (m % 50 == 0){
    n = n + canvSizeDraw;
    m = 0;
  }

  loadPixels();
  
  for(let i = 0; i < canvSizeDraw*4; i = i+4) {
    
     if (table1[i/4+n] >= table1[i/4+n+canvSizeDraw]){
      z = table1[i/4+n] - (table1[i/4+n]-table1[i/4+n+canvSizeDraw])/49*m;
     }else{
      z = table1[i/4+n] + (table1[i/4+n+canvSizeDraw]-table1[i/4+n])/49*m;
     }
     
//                   RGB
     if (z >= minRange && z < minRange+rangeSize) {
       r = 255;
       g = map(z,minRange,minRange+rangeSize,0,255);
       b = 0;
     }
     if (z >= minRange+rangeSize && z < minRange+2*rangeSize) {
       r = map(z,minRange+rangeSize,minRange+2*rangeSize,255,0);
       g = 255;
       b = 0;
     }
     if (z >= minRange+2*rangeSize && z < minRange+3*rangeSize) {
       r = 0;
       g = 255;
       b = map(z,minRange+2*rangeSize,minRange+3*rangeSize,0,255);
     }
     if (z >= minRange+3*rangeSize && z < minRange+4*rangeSize) {
       r = 0;
       g = map(z,minRange+3*rangeSize,minRange+4*rangeSize,255,0);
       b = 255;
     }
     if (z >= minRange+4*rangeSize && z < minRange+5*rangeSize) {
       r = map(z,minRange+4*rangeSize,minRange+5*rangeSize,0,255);
       g = 0;
       b = 255;
     }
     if (z >= minRange+5*rangeSize && z < minRange+6*rangeSize) {
       r = 255;
       g = 0;
       b = map(z,minRange+5*rangeSize,minRange+6*rangeSize,255,0);
     }     
    
    
     pixels[i] = r;
     pixels[i+1] = g;
     pixels[i+2] = b;
     pixels[i+3] = 255;
  }
  
  updatePixels(); 
}

