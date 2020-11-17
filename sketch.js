var table1;
var table2;
var table3;
var tableText1 = ['World', 'Countries','test1','test2'];
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
var countryCord = 0;
var textChoice = 'Search...';
var textSter1 = -1;

var pointX = 500;
var pointY = 1200;
var ster1 = -1;
var ster2 = 0;
var ster3 = 1;
var ster4 = 1;
var pos = 0;

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

function mouseWheel(event) {
  print(event.delta);
  //move the square according to the vertical scroll amount
  pos += event.delta/100;
  //uncomment to block page scrolling
  //return false;
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
  
   push();  
  if(countryCord != 0 && countryCord < 500 && mousX < windowWidth/1805*1405){
   name1 = table2.titles[countryCord-1].country.name;
//   scale((windowWidth)/1805, (windowHeight)/1250);

   strokeWeight(4);
   fill(255, 255, 255,100);
   rect(mousX, mousY-30, textWidth(name1)*2.5, 50, 20);
   fill(0);
   textSize(20);
   text(name1,mousX+10, mousY);

  }
  pop();

  panel1 = new Panel(windowWidth/1805*1405+10,0); 
  panel1.showPanel();
//  aaa = -1;

  sizeType1 = new SizeType(windowWidth/1805*1405+10,windowHeight,0.1,0.05,0.8,3,15); 
  sizeType1.sizeType();
  sizeType1.textType();
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
//  image(extraCanvas,this.x+10,this.y+10,1405,1230); 
  image(extraCanvas,this.x+6,this.y,1405); 
 
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
   countryCord = table1.titles[round(mouseX*(1805/(windowWidth-(390*(windowWidth/1805)))))+
   round(mouseY*1250/windowHeight)*1805];
   // countryCord = table1.titles[mouseX(windowWidth)/1805+
   // mouseY*1805];

//  scale(1.0);
  noFill();
  strokeWeight(1);
  stroke(65,20,255,255);  
  rect(0, 0,1205,750);   
  stroke(65,40,255,255);  
  rect(1, 1,1203,748);   
  stroke(65,60,255,255);  
  rect(2, 2,1201,746);   
  stroke(65,80,255,255);  
  rect(3, 3,1199,744);   
  stroke(65,100,255,255);  
  rect(4, 4,1197,742);   
  stroke(65,120,255,255);  
  rect(5, 5,1195,740);   
  stroke(65,140,255,255);  
  rect(6, 6,1193,738);   
  stroke(65,160,255,255);  
  rect(7, 7,1191,736);   
  stroke(65,180,255,255);  
  rect(8, 8,1189,734);   
  stroke(65,200,255,255);  
  rect(9, 9,1187,732);   
 }
}

     /*-------------KRAJE-------------*/


class Panel {
 constructor(x, y) {
  this.x = x;
  this.y = y;
 }  
 showPanel() {
  noStroke();
  fill(65, 20, 255,235);
  rect(this.x, this.y, windowWidth-this.x, windowHeight);

 }
}

class SizeType {
 constructor(x, y, a, b, c, d, textS) {
  this.x = x;
  this.y = y;
  this.a = a;
  this.b = b;
  this.c = c;
  this.d = d;
  this.textS = textS;

 }  


 sizeType() {
  var stX = this.x+(windowWidth-this.x)*this.a;
  var stY = this.y*this.b;
  var stX2 = (windowWidth-this.x)*this.c;
  var stY2 = windowHeight*this.b;
  
  fill(222, 222, 222,255);
  strokeWeight(2);
  stroke(0,0,0,150); 
  rect(stX, stY, stX2, stY2,20);  
  
  if(mousPressX >= stX && mousPressX <= stX+stX2 &&
     mousPressY >= stY && mousPressY <= stY+stY2){
   strokeWeight(1);
   rect(stX, stY, stX2, stY2+this.d*stY2,20);
   
   for(var z = 1; z <= this.d; z++){
    var zTmp = 0;
    if(z == this.d){
     var zTmp = 0;
    }
    if(mousX >= stX && mousX <= stX+stX2 &&
       mousY >= stY+z*stY2 && mousY <= stY+(z+1)*stY2) {
       fill(0, 0, 0,75);
    }else{
       fill(222, 222, 222,255);
    }
    rect(stX, stY+z*stY2, stX2, stY2,0,0,zTmp,zTmp);    
   }
  }
 }

 textType() {
  var stX = this.x+(windowWidth-this.x)*this.a;
  var stY = this.y*this.b;
  var stX2 = (windowWidth-this.x)*this.c;
  var stY2 = windowHeight*this.b;

  textSize(this.textS);
  textStyle(BOLD);
  textFont('Comic Sans MS');
  fill(110,110,110);
  stroke(255,255,255,255); 

  text(textChoice,stX+stX2*0.05, stY+stY2/2+textAscent(textChoice)/3);

  if(mousPressX >= stX && mousPressX <= stX+stX2 &&
     mousPressY >= stY && mousPressY <= stY+stY2){
   textSter1 = 1;
      
   for(var z = 1; z <= this.d; z++){
    text(tableText1[z-1],stX+stX2*0.1, stY+z*stY2+stY2/2+textAscent(tableText1[z-1])/3);
   }
   if(this.d < tableText1.length){
    strokeWeight(1);
    stroke(0,0,0,150); 
    fill(255,255,255);
    rect(stX+round(stX2*0.95), stY+stY2, stX2-round(stX2*0.95), this.d*stY2);
    fill(155,155,155);
    rect(stX+round(stX2*0.95), stY+stY2, stX2-round(stX2*0.95), 0.5*stY2+pos);
   }
  }
  
  if( textSter1 == 1){

   for(var z = 1; z <= this.d; z++){
    if(mousPressX >= stX && mousPressX <= stX+stX2 &&
       mousPressY >= stY+z*stY2 && mousPressY <= stY+(z+1)*stY2){
     textChoice = tableText1[z-1];
     textSter1 = textSter1*(-1);
    }
   }
  }
 }
}
 