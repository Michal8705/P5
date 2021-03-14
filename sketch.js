/*====================== ZMIENNE GLOBALNE =====================*/

var world1;
var table2;
var table22;
var table3;
var table4 = [];
var table5 = [];
var table6 = [];
var table7 = [];
var mousX = 0;
var mousY = 0;
var mousPressX = 0;
var mousPressX2 = 0;
var mousPressY = 0;
var sterButton = 1;
var extraCanvas;
var extraCanvas2;
var extraCanvas3;
var pos = 0;
var pos2 = 0;
var pos3 = 0;
var pos4 = 0;
var pos5 = 0;
var pos6 = 0;
var rel = 0;
var countryCord = 0;
var pointX = 500;
var pointY = 1200;
var ster1 = -1;
var inp;
var inpSter = 0;
var inpSter2 = '-----';
var aaaa = '';
var bbb = 0;
var mover1 = 0;
var stXLong2 = 100;
var stXLong3 = 2;
var test1 = 0;


/*====================== ZMIENNE CLASS =====================*/

var ST_addSlider = 0;
var ST_textChoice = ['', '', '-----', '-----', '-----'];
var ST_slider = [0, 0, 0, 0, 0];
var ST_textSter = [-1, -1, -1, -1, -1];
var ST_tabSearch1 = [[],[],[],[],[]];
var ST_tabSearch2 = [[],[],[],[],[]];
var ST_tabSearch3 = [];
var ST_tabSearch4 = [1, 1, 1, 1, 1];
var ST_tType = ['Map', 'Chart'];
var ST_tCategory = ['Population', 'Surface', 'Fortnite', 'Google search coutry', 'Google search city', 'Google search artist', 'Google search footbal player',
 'Google search game', 'Fortnite all', 'Fortnite solo', 'Fortnite solo wins', 'Fortnite solo kills', 'Fortnite squad', 'Fortnite squad', 'Players counter',
  'Steam online players', 'Youtube subscribers'];
//var ST_tCategory = ['Population', 'Surface', 'Fortnite','a','a','a','a'];
var ST_tComparision = ['All', 'One item', 'Two items'];

var B_cleaner = 1;

var L_ster1 = 0;
var L_ster2 = 1;

var C_changer = 0;
var C_control = [2, 2];

/*==========================================================*/

function preload() {
 world1 = loadJSON("swiat10.json");
 table2 = loadJSON("kraje.json");
 table22 = loadJSON("kraje2.json");
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
 pos = pos + event.delta / 100;
}

function mouseReleased() {
 if (rel === 0) {
  rel = 1;
  ST_addSlider = 0;
 } else {
  rel = 0;
 }
}

function mouseClicked() {
 pos3++;
 pos5++;
}

function setup() {
 createCanvas(displayWidth, displayHeight);
 if (sterButton == 1) {
  extraCanvas = createGraphics(1805, 1250);
  extraCanvas2 = createGraphics(20, 20);
  extraCanvas.pixelDensity(1.0);
  extraCanvas2.pixelDensity(1.0);
  pointX = extraCanvas.width / 2 - 80;
  pointY = extraCanvas.height / 2 + 200;
  ster1 = -1;
 }

 extraCanvas3 = createGraphics(60, 60);
 extraCanvas3.pixelDensity(1.0);


}






function draw() {
 
 if(test1 != displayWidth){
     setup();
 }
 test1 = displayWidth;
 
 
 if (sterButton == 0 && inpSter > 0 && inpSter2 != ST_textChoice[2]) {
  
  if (inpSter > 0){
   inp.remove();
  }
  if (inpSter == 2){
   inp2.remove();
  }
 
  ST_tabSearch3 = [];
  inpSter = 0;
 }

 if (sterButton == 0 && inpSter2 != ST_textChoice[2] && ST_textChoice[2] != ST_tComparision[0]) {
  var col = color(220, 220, 220, 255);

  if (ST_textChoice[2] == ST_tComparision[1] || ST_textChoice[2] == ST_tComparision[2]) {
   inp = createInput('');
   inp.elt.style.border = 'none';
   inp.elt.style.background = col;
   inp.elt.style.font.size = '40px';
   ST_tabSearch3.push(inp);
   inpSter = 1;
  }

  if (ST_textChoice[2] == ST_tComparision[2]) {
   inp2 = createInput('');
   inp2.elt.style.border = 'none';
   inp2.elt.style.background = col;
   inp2.elt.style.font.size = '40px';
   ST_tabSearch3.push(inp2);
   inpSter = 2;
  }
 }

 
 
 if (pos6 != pos5 && stXLong2 > 20) {
  ST_tabSearch4 = [];
  ST_tabSearch4 = [1, 1, 1, 1, 1];
 }

 /*--------- FIRST PAGE ---------*/

 if (sterButton == 1) {

  /*   map   */

  map1 = new FirstMap(0, 0);
  map1.firstMapShow();

  /*    light    */

  if (pointX == extraCanvas.width / 2 - 80 || pointX == extraCanvas.width / 2 + 60) {
   ster1 = ster1 * (-1);
  }
  pointX = pointX + 10 * ster1;

  light1 = new Light(pointX, pointY);
  light1.lightMoving();

  /*    buttons    */

  buttonMap = new Button(width / 2 - width / 5 - 10, height / 2 - (width / 8) / 2, 30, 'Maps', 60);
  buttonChart = new Button(width / 2 + 10, height / 2 - (width / 8) / 2, 30, 'Charts', 60);
  buttonMap.show();
  buttonChart.show();
 }

 /*--------- SECOND PAGE ---------*/

 if (sterButton == 0) {

  /*   map   */

  map1 = new SecondMap(0, 0);
  map1.secondMapShow();

  /*   show country on map   */

  push();
  if (countryCord != 0 && countryCord < 500 && mousX < displayWidth / 1805 * 1405) {
   name1 = table2.titles[countryCord - 1].country.name;

   strokeWeight(4);
   fill(255, 255, 255, 100);
   rect(mousX, mousY - 30, textWidth(name1) * 2.5, 50, 20);
   fill(0);
   textSize(20);
   text(name1, mousX + 10, mousY);
  }
  pop();

  /*   BLOCK OF PANELS   */

  /*   category panel   */

  panel1 = new Panel(displayWidth / 1805 * 1405 + 10, 0);
  panel1.showPanel();



  table4 = [];
  table7 = [];
  for (var tabList = 0; tabList < table2.titles.length; tabList++) {
   table4.push(table2.titles[tabList].country.name);
  }
  for (var tabList = 0; tabList < table22.titles.length; tabList++) {
   table7.push(table22.titles[tabList].country.name);
  }
  /*   MAPS   */
  

  changer2 = new Changer(displayWidth / 1805 * 1405 + 10, displayHeight, 0.1, 0.45, 0.2, 0.05, 1, 15, 'FULL SCREEN');
  changer2.changerType();

  if(ST_textChoice[4] == ST_tType[0]){
   changer1 = new Changer(displayWidth / 1805 * 1405 + 10, displayHeight, 0.1, 0.35, 0.2, 0.05, 0, 15, 'ADDITIONAL CHART');
   changer1.changerType();
  } 

  if(ST_textChoice[4] != '' && ST_textChoice[3] != '-----'){
   if(ST_textChoice[2] == ST_tComparision[0] || 
      (ST_textChoice[2] == ST_tComparision[1] && ST_textChoice[0] != '') ||
      (ST_textChoice[2] == ST_tComparision[2] && ST_textChoice[0] != '' && ST_textChoice[1] != '')){
      
    start1 = new Start(displayWidth / 1805 * 1405 + 10, displayHeight, 0.1, 0.85, 0.8, 0.05, 0, 25, 'START');
    start1.startType();
   }
  }
  
  if(ST_textChoice[2] == ST_tComparision[2]){

   sizeType2 = new SizeType(displayWidth / 1805 * 1405 + 10, displayHeight, 0.1, 0.65, 0.8, 0.05, 3, 15, table7, 1, 'ITEM II');
   sizeType2.sizeType();
   sizeType2.searchType();
   mover1 = 0;
  }

  if(ST_textChoice[2] == ST_tComparision[1] || ST_textChoice[2] == ST_tComparision[2]){
   sizeType1 = new SizeType(displayWidth / 1805 * 1405 + 10, displayHeight, 0.1, 0.55, 0.8, 0.05, 3, 15, table4, 0, 'ITEM I');
   sizeType1.sizeType();
   sizeType1.searchType();
   
  }
  inpSter2 = ST_textChoice[2];

  sizeType3 = new SizeType(displayWidth / 1805 * 1405 + 10, displayHeight, 0.1, 0.25, 0.8, 0.05, 3, 15, ST_tComparision, 2, 'COMPARISION');
  sizeType3.sizeType();
  sizeType3.textType();
  
  sizeType4 = new SizeType(displayWidth / 1805 * 1405 + 10, displayHeight, 0.1, 0.15, 0.8, 0.05, 3, 15, ST_tCategory, 3, 'CATEGORY');
  sizeType4.sizeType();
  sizeType4.textType();

  sizeType5 = new SizeType(displayWidth / 1805 * 1405 + 10, displayHeight, 0.1, 0.05, 0.8, 0.05, 3, 15, ST_tType, 4, 'TYPE');
  sizeType5.sizeType();
  sizeType5.textType();

  C_changer = pos5;
  text(ST_textChoice[2], 150, 100, 100, 100);
  text(ST_textChoice[0], 150, 120, 100, 100);
  text(ST_textChoice[1], 150, 150, 100, 100);
//  text(ST_tabSearch4[0].length, 150, 180, 100, 100);

  pos6 = pos5;
  stXLong2 = min(30, stXLong2 + 10);
 }


 /*    Logo    */

 logo1 = new Logo();
 logo1.createLogo();

}








/*--------------PRZYCISK-------------*/

class Button {
 constructor(x, y, r, name, nameSize) {
  this.x = x;
  this.y = y;
  this.r = r;
  this.name = name;
  this.nameSize = nameSize;
 }

 show() {
  var buttonX = width / 5;
  var buttonY = width / 8;

  /*    PODSWIETLENIE PRZYCISKU    */

  if (mousX >= this.x && mousX <= this.x + buttonX &&
   mousY >= this.y && mousY <= this.y + buttonY) {
   strokeWeight(20);
   stroke(55, 140, 240, 150);
  } else {
   strokeWeight(14);
   stroke(0, 240, 240, 150);
  }

  /*    USUNICIE PRZYCISKÓW    */

  if (mousPressX >= this.x && mousPressX <= this.x + buttonX &&
   mousPressY >= this.y && mousPressY <= this.y + buttonY) {
   sterButton = 0;
   clear();
   B_cleaner = B_cleaner * (-1);
   extraCanvas.clear();
   extraCanvas2.clear();
   setup();
  }

  fill(160, 240, 250, 200);
  rect(this.x, this.y, buttonX, buttonY, this.r);

  noStroke();
  textSize(this.nameSize);
  textFont('Comic Sans MS');
  fill(90, 90, 240);
  text(this.name, this.x + buttonX / 2 - textWidth(this.name) / 2, this.y + buttonY / 2 + buttonX / this.nameSize);

 }
}





/*-------------MAPA POCZATKOWA-------------*/

class FirstMap {
 constructor(x, y) {
  this.x = x;
  this.y = y;
 }

 firstMapShow() {

  push();
  extraCanvas.loadPixels();
  scale(displayWidth / 1805, displayHeight / 1250);
  image(extraCanvas, this.x, this.y);

  for (var e = 0; e < 1805; e++) {
   for (var f = 0; f < 1250; f++) {
    var g = (e + f * 1805) * 4;
    var extraCord = world1.titles[e + f * 1805];

    /*    WNTRZE KRAJÓW    */

    if (extraCord > 0 && extraCord < 500) {
     extraCanvas.pixels[g] = 0;
     extraCanvas.pixels[g + 1] = extraCord + 80;
     extraCanvas.pixels[g + 2] = extraCord + 80;
     extraCanvas.pixels[g + 3] = 255;
    }

    /*    GRANICE WODNE    */

    if (extraCord == 500) {
     extraCanvas.pixels[g] = 0;
     extraCanvas.pixels[g + 1] = 0;
     extraCanvas.pixels[g + 2] = 0;
     extraCanvas.pixels[g + 3] = 255;
    }

    /*    GRANICE KRAJÓW    */

    if (extraCord > 500) {
     extraCanvas.pixels[g] = 100;
     extraCanvas.pixels[g + 1] = 100;
     extraCanvas.pixels[g + 2] = 100;
     extraCanvas.pixels[g + 3] = 255;
    }

    /*    GRANICE WODA    */

    if (extraCord == 0) {
     extraCanvas.pixels[g] = 60;
     extraCanvas.pixels[g + 1] = 130;
     extraCanvas.pixels[g + 2] = table3.titles[e + f * 1805];
     extraCanvas.pixels[g + 3] = 255;
    }
   }
  }
  extraCanvas.updatePixels();
 }
}




/*---------------SWIATLO--------------*/

class Light {
 constructor(x, y) {
  this.x = x;
  this.y = y;
 }

 lightMoving() {

  fill(0, 0, 0);
  strokeWeight(7);
  stroke(50, 30, 250, 130);
  rect(extraCanvas.width / 2 - 80, extraCanvas.height / 2 + 200, 160, 20, 20);

  image(extraCanvas2, this.x, this.y);
  extraCanvas2.loadPixels();

  for (var a = 0; a < 20; a++) {
   for (var b = 0; b < 20; b++) {
    var c = (a + b * 20) * 4;
    var d = round(dist(a, b, 10, 10));

    if (d < 10) {
     extraCanvas2.pixels[c] = 255;
     extraCanvas2.pixels[c + 1] = 0;
     extraCanvas2.pixels[c + 2] = 0;
     extraCanvas2.pixels[c + 3] = map(d, 0, 10, 255, 0);
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
  image(extraCanvas3, width / 2 - 27, 15);
  extraCanvas3.loadPixels();

  for (var h = 0; h < 60; h++) {
   for (var i = 0; i < 60; i++) {
    var j = (h + i * 60) * 4;
    var k = round(dist(h, i, 30, 30));
    L_ster1 = L_ster1 + L_ster2;
    if (L_ster1 == 255 || L_ster1 == 0) {
     L_ster2 = L_ster2 * (-1);
    }
    if (k > 15 && k < 20) {
     extraCanvas3.pixels[j] = 0;
     extraCanvas3.pixels[j + 1] = L_ster1;
     extraCanvas3.pixels[j + 2] = 255;
     extraCanvas3.pixels[j + 3] = 255;
    }
   }
  }
  extraCanvas3.updatePixels();


  noStroke();
  textSize(15);
  textStyle(BOLD);
  textFont('Comic Sans MS');
  fill(255, 255, 255);
  text('P', width / 2 - 30, 50);
  fill(255, 0, 0);
  text('i', width / 2 - 20, 50);
  fill(0, 255, 255);
  text('X', width / 2 - 10, 50);
  fill(0, 0, 255);
  text('s', width / 2 - 0, 50);
  fill(255, 255, 0);
  text('t', width / 2 + 10, 50);
  fill(0, 255, 0);
  text('a', width / 2 + 20, 50);
  fill(0, 0, 0);
  text('T', width / 2 + 30, 50);
 }
}

/*========================================================*/

/*-------------MAPA POCZATKOWA 2-------------*/

class SecondMap {
 constructor(x, y) {
  this.x = x;
  this.y = y;
 }

 secondMapShow() {

  push();
  extraCanvas.loadPixels();
  scale((displayWidth) / 1805, (displayHeight) / 1250);
  image(extraCanvas, this.x + 6, this.y, 1405);

  for (var e = 0; e < 1805; e++) {
   for (var f = 0; f < 1250; f++) {
    var g = (e + f * 1805) * 4;
    var extraCord = world1.titles[e + f * 1805];

    /*    WNETRZE KRAJÓW    */

    if (extraCord > 0 && extraCord < 500) {
     extraCanvas.pixels[g] = 0;
     extraCanvas.pixels[g + 1] = extraCord + 80;
     extraCanvas.pixels[g + 2] = extraCord + 80;
     extraCanvas.pixels[g + 3] = 255;
    }

    /*    GRANICE WODNE    */

    if (extraCord == 500) {
     extraCanvas.pixels[g] = 0;
     extraCanvas.pixels[g + 1] = 0;
     extraCanvas.pixels[g + 2] = 0;
     extraCanvas.pixels[g + 3] = 255;
    }

    /*    GRANICE KRAJÓW    */

    if (extraCord > 500) {
     extraCanvas.pixels[g] = 100;
     extraCanvas.pixels[g + 1] = 100;
     extraCanvas.pixels[g + 2] = 100;
     extraCanvas.pixels[g + 3] = 255;
    }

    /*    WODA    */

    if (extraCord == 0) {
     extraCanvas.pixels[g] = 60;
     extraCanvas.pixels[g + 1] = 130;
     extraCanvas.pixels[g + 2] = table3.titles[e + f * 1805];
     extraCanvas.pixels[g + 3] = 255;
    }
   }
  }
  extraCanvas.updatePixels();


  pop();
  countryCord = world1.titles[round(mouseX * (1805 / (displayWidth - (390 * (displayWidth / 1805))))) +
   round(mouseY * 1250 / displayHeight) * 1805];

  noFill();
  strokeWeight(1);
  stroke(65, 20, 255, 255);
  rect(0, 0, 1205, 750);
  stroke(65, 40, 255, 255);
  rect(1, 1, 1203, 748);
  stroke(65, 60, 255, 255);
  rect(2, 2, 1201, 746);
  stroke(65, 80, 255, 255);
  rect(3, 3, 1199, 744);
  stroke(65, 100, 255, 255);
  rect(4, 4, 1197, 742);
  stroke(65, 120, 255, 255);
  rect(5, 5, 1195, 740);
  stroke(65, 140, 255, 255);
  rect(6, 6, 1193, 738);
  stroke(65, 160, 255, 255);
  rect(7, 7, 1191, 736);
  stroke(65, 180, 255, 255);
  rect(8, 8, 1189, 734);
  stroke(65, 200, 255, 255);
  rect(9, 9, 1187, 732);
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
  fill(65, 20, 255, 235);
  rect(this.x, this.y, displayWidth - this.x, displayHeight);

 }
}

class SizeType {
 constructor(x, y, xLeft, yHeight, xLong, yLong, fields, textS, tab, lp, name) {
  this.x = x;
  this.y = y;
  this.xLeft = xLeft;
  this.yHeight = yHeight;
  this.xLong = xLong;
  this.yLong = yLong;
  this.fields = fields;
  this.textS = textS;
  this.tab = tab;
  this.lp = lp;
  this.name = name;
 }


 sizeType() {
  var stX = this.x + (displayWidth - this.x) * this.xLeft;
  var stY = this.y * this.yHeight;
  var stXLong = (displayWidth - this.x) * this.xLong;
  var stYLong = displayHeight * this.yLong;
  var stXSlider = round(stXLong * 0.95);
  var stY6 = 0;
  this.fields = min(this.fields,this.tab.length);
  if(ST_tabSearch1[this.lp].length > 0){
   this.fields = max(2,min(this.fields,ST_tabSearch1[this.lp].length));
  }


  /*    NAZWA    */
  textSize(this.textS + this.textS / 2);
  textStyle(BOLD);
  textFont('Georgia');
  fill(0, 0, 0, 155);
  strokeWeight(4);
  stroke(125, 255, 255, 150);
  if (this.lp == 1) {
   stY6 = mover1;
  }

  text(this.name, stX + stXLong / 2 - textWidth(this.name) / 2, stY - stYLong + stYLong / 8 + stY6, 200, 100);


  fill(222, 222, 222, 255);
  strokeWeight(2);
  stroke(0, 0, 0, 150);
  rect(stX, stY + stY6, stXLong, stYLong, 20);

  /*    ZAMKNICIE OTWARTEGO PANELU KLIKNIECIEM POZA NIM    */

  if ((mousPressX >= stX && mousPressX <= stX + stXLong &&
    mousPressY >= stY && mousPressY <= stY + stYLong + this.fields * stYLong) == 0 && ST_textSter[this.lp] == 1) {
   ST_textSter.splice(this.lp, 1, ST_textSter[this.lp] * (-1));
   stXLong2 = 0;
   //    stXLong = 6*stY3;
   ST_tabSearch4 = [0, 0, 0, 0, 0];
   ST_tabSearch4.splice(this.lp, 1, 1);

  }


  /*    OWARCIE PANELU    */

  if (((mousPressX >= stX && mousPressX <= stX + stXLong &&
    mousPressY >= stY && mousPressY <= stY + stYLong) || ST_textSter[this.lp] == 1) && ST_tabSearch4[this.lp] == 1) {
   strokeWeight(1);
   rect(stX, stY, stXLong, stYLong + this.fields * stYLong, 20);
   ST_tabSearch4 = [0, 0, 0, 0, 0];
   ST_tabSearch4.splice(this.lp, 1, 1);
   stXLong2 = 0;
   // stXLong3 = 0;
   /*    utworzenie pól do tekstów    */

   for (var z = 1; z <= this.fields; z++) {
    var zTmp = 0;
    if (z == this.fields) {
     var zTmp = 20;
    }
    if (mousX >= stX && mousX <= stX + stXLong - (stXLong - stXSlider) &&
     mousY >= stY + z * stYLong && mousY <= stY + (z + 1) * stYLong) {
     fill(0, 0, 0, 75);
    } else {
     fill(222, 222, 222, 255);
    }
    rect(stX, stY + z * stYLong, stXLong - (stXLong - stXSlider), stYLong, 0, 0, 0, zTmp);
   }
  }
 }

 textType() {
  var stX = this.x + (displayWidth - this.x) * this.xLeft;
  var stY = this.y * this.yHeight;
  var stXLong = (displayWidth - this.x) * this.xLong;
  var stYLong = displayHeight * this.yLong;
  var stXSlider = round(stXLong * 0.95);
  var stBlocks = max(0, this.tab.length - this.fields);
  var stX3 = stX + stXSlider;
  var stY3 = stXLong - stXSlider;
  var stY4 = stY3 / (stBlocks + 1) * this.fields;
  var stSilderLong = max(stY3,(stYLong*this.fields-stY3*max(2,this.fields-1))/this.tab.length*min(this.fields,this.tab.length));


  textSize(this.textS);
  textStyle(BOLD);
  textFont('Comic Sans MS');
  fill(110, 110, 110);
  stroke(255, 255, 255, 255);

  text(ST_textChoice[this.lp], stX + (stXLong - textWidth(ST_textChoice[this.lp])) * 0.5, stY + stYLong / 2 + textAscent(ST_textChoice[this.lp]) / this.fields);

  /*    ROZPOCZECIE AKCI W OTWARTYM PANELU    */

  if (((mousPressX >= stX && mousPressX <= stX + stXLong &&
    mousPressY >= stY && mousPressY <= stY + stYLong) || ST_textSter[this.lp] == 1) && ST_tabSearch4[this.lp] == 1) {
   ST_textSter.splice(this.lp, 1, 1);
   ST_tabSearch4 = [0, 0, 0, 0, 0];
   ST_tabSearch4.splice(this.lp, 1, 1);
   stXLong2 = 0;

   /*    zaladowanie tekstów do pól    */

   for (var z = 1; z <= min(this.tab.length, this.fields); z++) {
    text(this.tab[z - 1 + ST_slider[this.lp]],
     stX + stXLong * 0.5 - textWidth(this.tab[z - 1 + ST_slider[this.lp]]) * 0.5,
     stY + z * stYLong + stYLong / 2 + textAscent(this.tab[z - 1 + ST_slider[this.lp]]) / min(this.tab.length, this.fields));
   }

   if (1 == 1) {
    strokeWeight(1);
    stroke(0, 0, 0, 150);
    fill(255, 255, 255);
    rect(stX3, stY + stYLong, stY3, this.fields * stYLong);

    /*    górny klikacz    */

    fill(220, 220, 220);
    if (mousX >= stX3 && mousX <= stX3 + stY3 &&
     mousY >= stY + stYLong && mousY <= stY + stYLong + stY3) {
     if (mouseIsPressed) {
      fill(150, 150, 150);
     } else {
      fill(180, 180, 180);
     }
    } else {
     fill(220, 220, 220);
    }
    rect(stX3, stY + stYLong, stY3, stY3);
    fill(50, 50, 50);
    triangle(stX3 + stY3 * 0.3, stY + stYLong + stY3 * 0.7,
     stX3 + stY3 * 0.7, stY + stYLong + stY3 * 0.7,
     stX3 + stY3 * 0.5, stY + stYLong + stY3 * 0.3);

    /*    dolny klikacz    */

    fill(220, 220, 220);
    if (mousX >= stX3 && mousX <= stX3 + stXLong - stXSlider &&
     mousY >= stY + stYLong + this.fields * stYLong - stY3 && mousY <= stY + stYLong + this.fields * stYLong) {
     if (mouseIsPressed) {
      fill(150, 150, 150);
     } else {
      fill(180, 180, 180);
     }
    } else {
     fill(220, 220, 220);
    }
    rect(stX3, stY + stYLong + this.fields * stYLong - stY3, stY3, stY3);
    fill(50, 50, 50);
    triangle(stX3 + stY3 * 0.3, stY + stYLong + this.fields * stYLong - stY3 * 0.7,
     stX3 + stY3 * 0.7, stY + stYLong + this.fields * stYLong - stY3 * 0.7,
     stX3 + stY3 * 0.5, stY + stYLong + this.fields * stYLong - stY3 * 0.3);

    /*    przesuwanie sówaka górnym klikaczem    */

    fill(155, 155, 155);
    if (pos < pos2 || ((pos3 > pos4 || mouseIsPressed) &&
      mousPressX >= stX3 && mousPressX <= stX3 + stY3 &&
      mousPressY >= stY + stYLong && mousPressY <= stY + stYLong + stY3)) {

     if (mouseIsPressed) {
      ST_addSlider++;
      //      if(ST_addSlider % max(10,round(50/this.tab.length)) == 0 ){
      if (ST_addSlider > 15) {
       ST_slider.splice(this.lp, 1, max(0, ST_slider[this.lp] - 1));
      }
     } else {
      ST_slider.splice(this.lp, 1, max(0, ST_slider[this.lp] - 1));
     }
    }

    /*    przesuwanie sówaka dolnym klikaczem    */

    if (pos > pos2 || ((pos3 > pos4 || mouseIsPressed) &&
      mousPressX >= stX3 && mousPressX <= stX3 + stXLong - stXSlider &&
      mousPressY >= stY + stYLong + this.fields * stYLong - stY3 && mousPressY <= stY + stYLong + this.fields * stYLong)) {

     if (mouseIsPressed) {
      ST_addSlider++;
      //      if(ST_addSlider % max(1,round(50/this.tab.length)) == 0 ){
      if (ST_addSlider > 15) {
       ST_slider.splice(this.lp, 1, min(stBlocks, ST_slider[this.lp] + 1));
      }
     } else {
      ST_slider.splice(this.lp, 1, min(stBlocks, ST_slider[this.lp] + 1));
     }
    }
    pos2 = pos;
    pos3 = pos4;

    /*    utworzenie slidera    */

    rect(stX3, stY + stYLong + stY3+(stYLong*this.fields-stY3*(this.fields-1)-stSilderLong)/max(1,stBlocks)*(ST_slider[this.lp]),
     stY3, stSilderLong);
   }
  }

  /*    PRZESUNICIE SLIDERA KLIKNIETA MYSZKA    */

  if (mouseIsPressed &&
   (mousX >= stX3 && mousX <= stX + stXLong &&
    mousY >= stY + stYLong + stY3 && mousY <= stY + stYLong + this.fields * stYLong - stY3) == 1) {
   ST_slider.splice(this.lp, 1, min(stBlocks, max(0, round(map(mouseY, stY + stYLong + stY3, stY + stYLong + this.fields * stYLong - stY3, 0, stBlocks)))));
  }

  /*    WYBÓR KONKRETNEJ POZYCJI    */

  if (ST_textSter[this.lp] == 1) {
   for (var z = 1; z <= this.fields; z++) {
    if (mousPressX >= stX && mousPressX <= stX3 &&
     mousPressY >= stY + z * stYLong && mousPressY <= stY + (z + 1) * stYLong) {
     ST_textChoice.splice(this.lp, 1, this.tab[z - 1 + ST_slider[this.lp]]);
     ST_textSter.splice(this.lp, 1, ST_textSter[this.lp] * (-1));
    }
   }
  }
 }



 searchType() {
  var stX = this.x + (displayWidth - this.x) * this.xLeft;
  var stY = this.y * this.yHeight;
  var stXLong = (displayWidth - this.x) * this.xLong;
  var stYLong = displayHeight * this.yLong;
  var stXSlider = round(stXLong * 0.95);
  var stBlocks = this.tab.length - this.fields;
  var stX3 = stX + stXSlider;
  var stY3 = stXLong - stXSlider;
  var stY4 = stY3 / (stBlocks + 1) * this.fields;
  var stY5 = 0;
  var stY6 = 0;
  var stSilderLong = max(stY3,(stYLong*this.fields-stY3*max(2,this.fields-1))/ST_tabSearch1[this.lp].length*min(this.fields,ST_tabSearch1[this.lp].length));

  textSize(this.textS);
  textStyle(BOLD);
  textFont('Comic Sans MS');
  fill(110, 110, 110);
  stroke(255, 255, 255, 255);

  if (this.lp == 1) {
   stY6 = mover1;
  }

  //  text(ST_textChoice[this.tc],stX+(stXLong-textWidth(ST_textChoice[this.tc]))*0.5, stY+stYLong/2+textAscent(ST_textChoice[this.tc])/this.e);

  ST_tabSearch3[this.lp].position(stX + stY3, stY + (stYLong * 0.2) + stY6);
  ST_tabSearch3[this.lp].size(stXLong - 2 * stY3, stYLong * 0.5);

  /*    ROZPOCZECIE AKCI W OTWARTYM PANELU    */
  //     stXLong = 0;

  if (((mousPressX >= stX && mousPressX <= stX + stXLong &&
    mousPressY >= stY && mousPressY <= stY + stYLong) || ST_textSter[this.lp] == 1) && ST_tabSearch4[this.lp] == 1) {
   ST_textSter.splice(this.lp, 1, 1);
   ST_tabSearch4 = [0, 0, 0, 0, 0];
   ST_tabSearch4.splice(this.lp, 1, 1);
   stXLong2 = 0;
   mover1 = 6 * stY3;
   /*    zaladowanie tekstów do pól    */


   ST_tabSearch1[this.lp] = [];
   var searchTab1 = ST_tabSearch3[this.lp].value();
   for (var v = 0; v < this.tab.length; v++) {
    var searchTab2 = '';
    searchTab2 = this.tab[v];
    searchTab2 = searchTab2.toUpperCase();
    if (searchTab2.indexOf(searchTab1.toUpperCase()) >= 0) {
     //     table5.push(this.tab[v]);
     ST_tabSearch1[this.lp].push(this.tab[v]);
    }
   }
   stBlocks = max(0, ST_tabSearch1[this.lp].length - this.fields);
   stY4 = stY3 / (stBlocks + 1) * this.fields;
   if (ST_tabSearch2[this.lp].length != ST_tabSearch1[this.lp].length) {
    ST_slider.splice(this.lp, 1, 0);
   }
   ST_tabSearch2[this.lp] = ST_tabSearch1[this.lp];
   for (var z = 1; z <= min(this.fields, ST_tabSearch1[this.lp].length); z++) {

    // text(this.tab[z-1+ST_slider[this.tc]],stX+stXLong*0.1, stY+z*stYLong+stYLong/2+textAscent(this.tab[z-1+ST_slider[this.tc]])/this.e);
    text(ST_tabSearch1[this.lp][max(0, z - 1 + ST_slider[this.lp])], stX + stXLong * 0.1, stY + z * stYLong + stYLong / 2 + textAscent(ST_tabSearch1[this.lp][max(0, z - 1 + ST_slider[this.lp])]) / this.fields);
   }

//   if (this.fields < ST_tabSearch1[this.lp].length) {
   if (1 == 1) {
    strokeWeight(1);
    stroke(0, 0, 0, 150);
    fill(255, 255, 255);
    rect(stX3, stY + stYLong, stY3, this.fields * stYLong);

    /*    górny klikacz    */

    fill(220, 220, 220);
    if (mousX >= stX3 && mousX <= stX3 + stY3 &&
     mousY >= stY + stYLong && mousY <= stY + stYLong + stY3) {
     if (mouseIsPressed) {
      fill(150, 150, 150);
     } else {
      fill(180, 180, 180);
     }
    } else {
     fill(220, 220, 220);
    }
    rect(stX3, stY + stYLong, stY3, stY3);
    fill(50, 50, 50);
    triangle(stX3 + stY3 * 0.3, stY + stYLong + stY3 * 0.7,
     stX3 + stY3 * 0.7, stY + stYLong + stY3 * 0.7,
     stX3 + stY3 * 0.5, stY + stYLong + stY3 * 0.3);

    /*    dolny klikacz    */

    fill(220, 220, 220);
    if (mousX >= stX3 && mousX <= stX3 + stXLong - stXSlider &&
     mousY >= stY + stYLong + this.fields * stYLong - stY3 && mousY <= stY + stYLong + this.fields * stYLong) {
     if (mouseIsPressed) {
      fill(150, 150, 150);
     } else {
      fill(180, 180, 180);
     }
    } else {
     fill(220, 220, 220);
    }
    rect(stX3, stY + stYLong + this.fields * stYLong - stY3, stY3, stY3);
    fill(50, 50, 50);
    triangle(stX3 + stY3 * 0.3, stY + stYLong + this.fields * stYLong - stY3 * 0.7,
     stX3 + stY3 * 0.7, stY + stYLong + this.fields * stYLong - stY3 * 0.7,
     stX3 + stY3 * 0.5, stY + stYLong + this.fields * stYLong - stY3 * 0.3);

    /*    przesuwanie sówaka górnym klikaczem    */

    fill(155, 155, 155);
    if (pos < pos2 || ((pos3 > pos4 || mouseIsPressed) &&
      mousPressX >= stX3 && mousPressX <= stX3 + stY3 &&
      mousPressY >= stY + stYLong && mousPressY <= stY + stYLong + stY3)) {

     if (mouseIsPressed) {
      ST_addSlider++;
      //      if(ST_addSlider % max(10,round(50/this.tab.length)) == 0 ){
      if (ST_addSlider > 15) {
       ST_slider.splice(this.lp, 1, max(0, ST_slider[this.lp] - 1));
      }
     } else {
      ST_slider.splice(this.lp, 1, max(0, ST_slider[this.lp] - 1));
     }
    }

    /*    przesuwanie sówaka dolnym klikaczem    */

    if (pos > pos2 || ((pos3 > pos4 || mouseIsPressed) &&
      mousPressX >= stX3 && mousPressX <= stX3 + stXLong - stXSlider &&
      mousPressY >= stY + stYLong + this.fields * stYLong - stY3 && mousPressY <= stY + stYLong + this.fields * stYLong)) {

     if (mouseIsPressed) {
      ST_addSlider++;
      //      if(ST_addSlider % max(1,round(50/this.tab.length)) == 0 ){
      if (ST_addSlider > 15) {
       ST_slider.splice(this.lp, 1, min(stBlocks, ST_slider[this.lp] + 1));
      }
     } else {
      ST_slider.splice(this.lp, 1, min(stBlocks, ST_slider[this.lp] + 1));
     }
    }
    pos2 = pos;
    pos3 = pos4;

    /*    utworzenie slidera    */
    if (((stY + stYLong * 4 - 2 * stY3) - (stY + stYLong)) / max(1, stBlocks + 1) < stY3) {
     stY5 = stY3 - ((stY + stYLong * 4 - 2 * stY3) - (stY + stYLong)) / max(1, stBlocks + 1);
    }
    // rect(stX3, min(stY + stYLong * 4, (stY + stYLong + stY3) + ST_slider[this.lp] * (((stY + stYLong * 4 - 2 * stY3) - (stY + stYLong + stY5)) / max(1, stBlocks + 1))),
    //  stY3, max(stY3, ((stY + stYLong * 4 - 2 * stY3) - (stY + stYLong)) / max(1, stBlocks + 1)));
    rect(stX3, stY + stYLong + stY3+(stYLong*this.fields-stY3*(this.fields-1)-stSilderLong)/max(1,stBlocks)*(ST_slider[this.lp]),
     stY3, stSilderLong);
   }
  }

  /*    PRZESUNICIE SLIDERA KLIKNIETA MYSZKA    */

  if (mouseIsPressed &&
   (mousX >= stX3 && mousX <= stX + stXLong &&
    mousY >= stY + stYLong + stY3 && mousY <= stY + stYLong + this.fields * stYLong - stY3) == 1) {
   ST_slider.splice(this.lp, 1, min(stBlocks, max(0, round(map(mouseY, stY + stYLong + stY3, stY + stYLong + this.fields * stYLong - stY3, 0, stBlocks)))));
  }

  /*    WYBÓR KONKRETNEJ POZYCJI    */

  if (ST_textSter[this.lp] == 1) {
   for (var z = 1; z <= this.fields; z++) {
    if (mousPressX >= stX && mousPressX <= stX3 &&
     mousPressY >= stY + z * stYLong && mousPressY <= stY + (z + 1) * stYLong) {
     ST_textChoice.splice(this.lp, 1, ST_tabSearch1[this.lp][max(0, z - 1 + ST_slider[this.lp])]);
     ST_textSter.splice(this.lp, 1, ST_textSter[this.lp] * (-1));
     ST_tabSearch3[this.lp].value(ST_textChoice[this.lp]);
    }
   }
  }
 }
}

/*-------------ZMIENIACZ-------------*/


class Changer {
 constructor(x, y, xLeft, yHeight, xLong, yLong, control, textS, name) {
  this.x = x;
  this.y = y;
  this.xLeft = xLeft;
  this.yHeight = yHeight;
  this.xLong = xLong;
  this.yLong = yLong;
  this.control = control;
  this.textS = textS;
  this.name = name;
 }


 changerType() {
  var stX = this.x + (displayWidth - this.x) * this.xLeft;
  var stY = this.y * this.yHeight;
  var stXLong = (displayWidth - this.x) * this.xLong;
  var stYLong = displayHeight * this.yLong;
  var stXSlider = round(stXLong * 0.95);

  /*    NAZWA    */
  textSize(this.textS + this.textS / 4);
  textStyle(BOLD);
  textFont('Georgia');
  fill(0, 0, 0, 155);
  strokeWeight(4);
  stroke(125, 255, 255, 150);

  text(this.name, stX + stXLong / 1, stY + this.textS / 2, 300, 100);

  fill(222, 222, 222, 255);
  strokeWeight(4);
  stroke(222, 222, 222, 155);
  rect(stX, stY, stYLong + stYLong / 2, stYLong, 20);

  if (C_changer < pos5 &&
   (mousX >= stX && mousX <= stX + stYLong + stYLong / 2 &&
    mousY >= stY && mousY <= stY + stYLong) == 1) {
   if (C_control[this.control] == 1) {
    C_control.splice(this.control, 1, 2);
   } else {
    C_control.splice(this.control, 1, 1);
   }
  }
  if (C_control[this.control] == 1) {
   fill(0, 255, 0, 255);
  } else {
   fill(255, 0, 0, 255);
  }
  ellipse(stX + stYLong / C_control[this.control], stY + stYLong / 2, stYLong, stYLong);
 }
}

/*-------------START-------------*/


class Start {
 constructor(x, y, xLeft, yHeight, xLong, yLong, control, textS, name) {
  this.x = x;
  this.y = y;
  this.xLeft = xLeft;
  this.yHeight = yHeight;
  this.xLong = xLong;
  this.yLong = yLong;
  this.control = control;
  this.textS = textS;
  this.name = name;
 }


 startType() {
  var stX = this.x + (displayWidth - this.x) * this.xLeft;
  var stY = this.y * this.yHeight;
  var stXLong = (displayWidth - this.x) * this.xLong;
  var stYLong = displayHeight * this.yLong;
  var stXSlider = round(stXLong * 0.95);


  //  text(this.name,stX+stXLong/1 ,stY+this.textS/2,300,100);
  text(this.name, stX + stXLong / 2 - textWidth(this.name) / 2, stY + stYLong, 200, 100);

  fill(222, 222, 222, 255);
  strokeWeight(4);
  stroke(0, 0, 0, 155);
  rect(stX + stYLong, stY, stXLong - stYLong * 2, stYLong * 2, 20);


  /*    NAZWA    */
  textSize(this.textS + this.textS / 4);
  textStyle(BOLD);
  textFont('Georgia');
  fill(0, 0, 0, 155);
  strokeWeight(4);
  stroke(125, 255, 255, 150);

  text(this.name, stX + stXLong / 2 - textWidth(this.name) / 2, stY + stYLong - (this.textS + this.textS / 4) / 2, 200, 100);

  // if (C_changer < pos5 && 
  //     (mousX >= stX && mousX <= stX+stYLong+stYLong/2 &&
  //      mousY >= stY && mousY <= stY+stYLong) == 1){
  //  if(C_control[this.control] == 1){
  //   C_control.splice(this.control, 1, 2);
  //  }else{
  //   C_control.splice(this.control, 1, 1);
  //  }
  // }
  // if(C_control[this.control] == 1){
  //  fill(0, 255, 0,255);
  // }else{
  //  fill(255, 0, 0,255);
  // }
  // ellipse(stX+stYLong/C_control[this.control], stY+stYLong/2, stYLong, stYLong);  
 }
}