var table1 = [];
var mapSum = 1;  
var ster = 1;
var rand1 = -10;
var rand2 = 10;
var x = 0;
var y = 0;

function setup() {
  createCanvas(200, 200);
 
  var canvSize = width*height/(ster*ster);

  for(let map1Times = 0; map1Times < mapSum; map1Times++) {  
        
    for(let x = 0; x < width/ster; x++) {      
      for(let y = 0; y < height/ster; y++) {

        if (x == 0 && map1Times == 0){
          table1.push(random(100,200));
        }
          

        if (x > 0 && y == 0 && map1Times == 0){
          table1.push(min(200,max(100,
                (table1[table1.length - height/ster]+
                 table1[table1.length - height/ster+1])/2+
                   random(rand1,rand2))));
        }

        if (x > 0 && y == height/ster-1 && map1Times == 0){
          table1.push(min(200,max(100,
                (table1[table1.length - height/ster]+
                 table1[table1.length - height/ster-1])/2+
                   random(rand1,rand2))));
        }
        
        
        if (x > 0 && y != 0 && y != height/ster-1 && map1Times == 0){
          table1.push(min(200,max(100,
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
  x = x + 1;
  
  if (x % 100000 == 0){
    y = y + 1;
  }

  loadPixels();
  for(let i = 0; i < 40000*4; i = i+4) {

     pixels[i] = 0;
     pixels[i+1] = table1[i/4];
     pixels[i+2] = 0;
     pixels[i+3] = 255;
    // if(i > 40000*4 -20){
    //   print(table1[i/4]);
    // }  
  }
  
  updatePixels(); 
}


// function draw() {
//   // background(220);
//   x = x + 1;
  
//   if (x % 1 == 0){
//     y = y + 1;
//   }
//   print(y);
//   loadPixels();
//   for(let i = 0; i < 160000*4; i = i+4) {

//      pixels[i] = y;
//      pixels[i+1] = 0;x == 1 && x == 1 && 
//      pixels[i+2] = 0;
//      pixels[i+3] = 255;

//   }  
  
//   updatePixels(); 
// }