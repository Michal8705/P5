var table1;
var table2;
var table3;
var textsSize = 60;
var mousX = 0;
var mousY = 0;
var mousPressX = 0;
var mousPressY = 0;
var sterButton = 1;
var extraCanvas;
var extraCanvas2;
var extraCanvas3;
var extraCord = 0;

var pointX = 500;
var pointY = 1200;
var ster1 = -1;
var ster2 = 0;
var ster3 = 1;
var ster4 = 1;

function preload() {
 table1 = loadJSON("swiat10.json");
 table2 = loadJSON("kraje.json");
 table3 = loadJSON("woda3.json");
}

function mouseMoved() {
 mousX = mouseX;
 mousY = mouseY;
}

function mousePressed() {
 mousPressX = mouseX;
 mousPressY = mouseY;


 
}

function setup() {
 if (sterButton == 1){
 extraCanvas = createGraphics(1805, 1250);
 extraCanvas2 = createGraphics(20, 20);
 extraCanvas.pixelDensity(1.0); 
 extraCanvas2.pixelDensity(1.0); 
// extraCanvas.background(0);
 pointX = extraCanvas.width/2-80;
 pointY = extraCanvas.height/2+200;
 ster1 = -1;
 }
 
 extraCanvas3 = createGraphics(60, 60);
 extraCanvas3.pixelDensity(1.0);
}

function draw() {

 createCanvas(windowWidth, windowHeight);



     /*    Map    */  

 if (sterButton == 1){ 
  map1 = new FirstMap(0,0); 
  map1.firstMapShow();
 }

 if (sterButton == 0){ 
  map1 = new SecondMap(0,0); 
  map1.secondMapShow();
 }


     /*    Light    */  

 if (sterButton == 1){ 
  if(pointX == extraCanvas.width/2-80 || pointX == extraCanvas.width/2+60){
   ster1 = ster1*(-1);
  }
  pointX = pointX+10*ster1;

  light1 = new Light(pointX,pointY); 
  light1.lightMoving();
 }
 

 
     /*    Logo    */  
      
 logo1 = new Logo(); 
 logo1.createLogo();



 
     /*    Button    */  

 var buttonX = width/5;
 var buttonY = width/8;
 
 if (sterButton == 1){
  buttonMap = new Button(width/2-buttonX-10,height/2-buttonY/2,30,'Maps');
  buttonChart = new Button(width/2+10,height/2-buttonY/2,30,'Charts');
  buttonMap.show();
  buttonChart.show();
  
  
 }
}





     /*--------------PRZYCISK-------------*/

class Button {
 constructor(x, y, r, t) {
  this.x = x;
  this.y = y;
  this.r = r;
  this.t = t;
 }

 show() {
  var buttonX = width/5;
  var buttonY = width/8;
  
     /*    PODSWIETLENIE PRZYCISKU    */
  
  if(mousX >= this.x && mousX <= this.x+buttonX &&
     mousY >= this.y && mousY <= this.y+buttonY) {
   strokeWeight(20);
   stroke(55,140,240,150); 
  }else{
   strokeWeight(14);
   stroke(0,240,240,150);   
  }

     /*    USUNICIE PRZYCISKÓW    */
  
  if(mousPressX >= this.x && mousPressX <= this.x+buttonX &&
     mousPressY >= this.y && mousPressY <= this.y+buttonY){
     sterButton = 0;
     clear();
     ster4 =ster4 *(-1);
     extraCanvas.clear();
     extraCanvas2.clear();
//     extraCanvas3.reset();
//     table1.reset(); 
//     table2.reset(); 
//     table3.reset(); 
//     preload();
     setup();
  }
  
  fill(160,240,250,200);
  rect(this.x, this.y, buttonX, buttonY, this.r);
  
  noStroke();
  textSize(textsSize);
  textFont('Comic Sans MS');
  fill(90,90,240);
  text(this.t,this.x+buttonX/2-textWidth(this.t)/2, this.y+buttonY/2+buttonX/textsSize);

 }
}





     /*-------------MAPA POCZATKOWA-------------*/

class FirstMap {
 constructor(x, y) {
  this.x = x;
  this.y = y;
 } 
 
 firstMapShow(){
  
  push(); 
  extraCanvas.loadPixels();
  scale(windowWidth/1805, windowHeight/1250);
//  translate(-105, -273);
  image(extraCanvas,this.x,this.y); 
 
  for(var e = 0; e < 1805; e++){
   for(var f = 0; f < 1250; f++){
    var g = (e+f*1805)*4;
    extraCord = table1.titles[e+f*1805];

     /*    WNTRZE KRAJÓW    */  
  
    if(extraCord > 0 && extraCord < 500){
     extraCanvas.pixels[g] = 0;
     extraCanvas.pixels[g+1] = extraCord+80;
     extraCanvas.pixels[g+2] = extraCord+80;
     extraCanvas.pixels[g+3] = 255;
    }
   
     /*    GRANICE WODNE    */  
  
    if(extraCord == 500){
     extraCanvas.pixels[g] = 0;
     extraCanvas.pixels[g+1] = 0;
     extraCanvas.pixels[g+2] = 0;
     extraCanvas.pixels[g+3] = 255;
    }
  
     /*    GRANICE KRAJÓW    */  
  
    if(extraCord > 500){
     extraCanvas.pixels[g] = 100;
     extraCanvas.pixels[g+1] = 100;
     extraCanvas.pixels[g+2] = 100;
     extraCanvas.pixels[g+3] = 255;
    }
   
     /*    GRANICE WODA    */  

    if(extraCord == 0){
     extraCanvas.pixels[g] = 60;
     extraCanvas.pixels[g+1] = 130;
     extraCanvas.pixels[g+2] = table3.titles[e+f*1805];
     extraCanvas.pixels[g+3] = 255;
    }
   }
  }
  extraCanvas.updatePixels(); 
//  pop();
 }
}




      /*---------------SWIATLO--------------*/

class Light {
 constructor(x, y) {
  this.x = x;
  this.y = y;
 }
 lightMoving() { 
  
  fill(0,0,0);
  strokeWeight(7);
  stroke(50,30,250,130);  
  rect(extraCanvas.width/2-80, extraCanvas.height/2+200,160,20,20); 
 
  image(extraCanvas2,this.x,this.y);
  extraCanvas2.loadPixels();
  
  for(var a = 0; a < 20; a++){
   for(var b = 0; b < 20; b++){
    var c = (a+b*20)*4; 
    var d = round(dist(a,b,10,10)); 
   
    if(d < 10){
     extraCanvas2.pixels[c] = 255;
     extraCanvas2.pixels[c+1] = 0;
     extraCanvas2.pixels[c+2] = 0;
     extraCanvas2.pixels[c+3] = map(d,0,10,255,0);
    }
   }
  }   
  extraCanvas2.updatePixels();  
  pop();
 }
}
 



      /*---------------LOGO--------------*/

class Logo {
 
 createLogo() {
  image(extraCanvas3,width/2-27,15);
  extraCanvas3.loadPixels();
  
  for(var h = 0; h < 60; h++){
   for(var i = 0; i < 60; i++){
    var j = (h+i*60)*4; 
    var k = round(dist(h,i,30,30)); 
    ster2 = ster2 + ster3;
    if(ster2 == 255 || ster2 == 0){
     ster3 = ster3*(-1);
    }
    if(k > 15 && k < 20){
     extraCanvas3.pixels[j] = 0;
     extraCanvas3.pixels[j+1] = ster2;
     extraCanvas3.pixels[j+2] = 255;
     extraCanvas3.pixels[j+3] = 255;
    }
   }
  }   
  extraCanvas3.updatePixels();  


  noStroke();
  textSize(15);
  textStyle(BOLD);
  textFont('Comic Sans MS');
  fill(255,255,255);
  text('P',width/2-30, 50);
  fill(255,0,0);
  text('i',width/2-20, 50);
  fill(0,255,255);
  text('X',width/2-10, 50);
  fill(0,0,255);
  text('s',width/2-0, 50);
  fill(255,255,0);
  text('t',width/2+10, 50);
  fill(0,255,0);
  text('a',width/2+20, 50);
  fill(0,0,0);
  text('T',width/2+30, 50);
 }
}

/*========================================================*/

     /*-------------MAPA POCZATKOWA 2-------------*/

class SecondMap {
 constructor(x, y) {
  this.x = x;
  this.y = y;
 } 
 
 secondMapShow(){
  
  push(); 
  extraCanvas.loadPixels();
  scale((windowWidth)/1805, (windowHeight)/1250);
//  translate(-105, -273);
  image(extraCanvas,this.x+10,this.y+10,1405,1230); 
 
  for(var e = 0; e < 1805; e++){
   for(var f = 0; f < 1250; f++){
    var g = (e+f*1805)*4;
    extraCord = table1.titles[e+f*1805];

     /*    WNTRZE KRAJÓW    */  
  
    if(extraCord > 0 && extraCord < 500){
     extraCanvas.pixels[g] = 0;
     extraCanvas.pixels[g+1] = extraCord+80;
     extraCanvas.pixels[g+2] = extraCord+80;
     extraCanvas.pixels[g+3] = 255;
    }
   
     /*    GRANICE WODNE    */  
  
    if(extraCord == 500){
     extraCanvas.pixels[g] = 0;
     extraCanvas.pixels[g+1] = 0;
     extraCanvas.pixels[g+2] = 0;
     extraCanvas.pixels[g+3] = 255;
    }
  
     /*    GRANICE KRAJÓW    */  
  
    if(extraCord > 500){
     extraCanvas.pixels[g] = 100;
     extraCanvas.pixels[g+1] = 100;
     extraCanvas.pixels[g+2] = 100;
     extraCanvas.pixels[g+3] = 255;
    }
   
     /*    GRANICE WODA    */  

    if(extraCord == 0){
     extraCanvas.pixels[g] = 60;
     extraCanvas.pixels[g+1] = 130;
     extraCanvas.pixels[g+2] = table3.titles[e+f*1805];
     extraCanvas.pixels[g+3] = 255;
    }
   }
  }
  extraCanvas.updatePixels();  
  pop();
 }
}

 