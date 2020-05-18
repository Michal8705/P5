var table1 = [];
var table2 = [];
var table3 = [];
var mapSum = 100;  
var map1Times = 0;  
var map2Times = 0;  
var ster = 100;
var countTimes = 0;
let canvSize1 = 0;
var minSize1 = 0;
var minSize2 = 0;
var checker = 0;
var k = 0;
var counter = 0;


var z = 0;
var a = 0;
var b = 0;
var q = 0;
var c = 0;




function setup() {
  createCanvas(600, 600);
var o = 0;  
var r = 0;  
var q = 0;


  for(o = 0; o < 2000000; o++) {  
      table1.push(random(50,250));
  
  }

//   counter++;
//   print(counter);
  
//   if(counter > 200){
  
      for(q = 0; q < 100000; q++) {  

    }
  
    for(r = 0; r < 2000000; r++) {  
      table1.push(random(50,250));
    
  }   
}


function draw() {
  background(220);
  var a = 0;
  var b = 0;
  
  z = z + 1;
  
  // if (z % 10 == 0) {
  //   q = q + width*height/(ster*ster);
  // };

  for(a = 0; a < 600; a = a + 4) { 
    k = k+1;
    for(b = 0; b < 600; b = b + 4) {  
      k = k+1;

      noStroke();
      fill(table1[z+k],table1[z+k],table1[z+k]);
      rect(b,a,4,4);
      // rect(b,a,ster-ster/4*2,ster-ster/4*2);
      // rect(b,a,ster-ster/4*3,ster-ster/4*3);

    }      
  }
}


