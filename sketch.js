p5.disableFriendlyErrors = true;

for (var a = 1; a < 2000; a++) {
 eval('var data'+a+';');
 eval('var item'+a+' = 0;');
}

var listOfWords;
var listOfKeys;
var data;
var item = '';
var url;
var date = new Date().toJSON().slice(0, 10);

var test1 = 0;
var test2 = 0;
var test3 = 0;
var test4 = 1;
var test5 = 1;
var tableX = 0;
var positionX = 0;
var lengthPositionTest = 0;
var kluczNumber = 0;
var dajWynik = 0;
var wynik = [];
var wynikTMP = [];
var bbb = 1;

var klucz = "AIzaSyDb6AJ4GmfnHw_Roq12tgc-W3ZP3z6KuFM"



function preload() {

 if (test1 == 0){
  listOfWords = loadStrings("listOfWordsGoogleP5Score.txt");
  listOfKeys = loadStrings("Keys.txt");
  test1 = 1
 }
  
 if (test1 == 2){
   
  try {
    data = loadJSON(url);
  } catch(error) {
    console.error(error);
    data = {}
  }

 }
}


function setup() {
 createCanvas(400, 400);
 background(220);
 if (test1 == 1){
  wynik.push(date); 
 }
}

function draw() {
 createCanvas(400, 400);
 background(220);
 textSize(20);
  
 if (test1 > 0 &&
     test4 == 1 &&
     listOfWords.length > 0 &&
     listOfKeys.length > 0 
    ){
   
  for (var a = tableX; a < min(tableX+1,listOfWords.length); a++) {
//  for (var a = tableX; a < min(tableX+1,2); a++) {
   var str = listOfWords[a].toString();
   str = str.split(";");   
    
   for (var b = positionX; b < min(positionX+1,str.length); b++) {  
//   for (var b = positionX; b < min(positionX+1,1); b++) {  
    var str2 = str[b].toString();
    klucz = listOfKeys[kluczNumber]; 
    url = "https://www.googleapis.com/customsearch/v1?key="+klucz+"&cx=f02dbbfc8b2744b4d&q="+str2;
    test2 = test2 + 1;
     
    if (test2 % 99 == 0){
     kluczNumber = kluczNumber+1 
    }
   }
  }   
 test1 = 2  
 preload();
 setup()
 }


  
 
  // text(data,10,110)
  // console.log(data);
  
  if (data.queries === undefined &&
     listOfWords.length > 0 &&
     listOfKeys.length > 0 ){
  test4 = 0;
test5++  
 }
   
 if (data.queries != undefined &&
     listOfWords.length > 0 &&
     listOfKeys.length > 0 ){
   
  if (data.queries.request[0].length != 0){
  test3 = test3 + 1;
   
   test4 = 1; 
   var str = listOfWords[tableX].toString();
   str = str.split(";");   
   lengthPositionTest = str.length
   item = data.queries.request[0].totalResults; 
   if (item == null){
    item = 0 
   }
   wynikTMP.push(item);
   positionX = positionX + 1; 
   data;
   if (positionX == lengthPositionTest){
//   if (positionX == 1){
    positionX = 0;
    tableX = tableX + 1;
    wynik.push(wynikTMP);
    wynikTMP = []; 
   }
  if (tableX == listOfWords.length){
//   if (tableX == 2){
    test1 = 3;
   }
  }
   
 test5 = 0;
 }
  
  
 if (test5 == 50){
  test3 = test3 + 1;
   
   test4 = 1; 
   var str = listOfWords[tableX].toString();
   str = str.split(";");   
   lengthPositionTest = str.length
   item = 0
   wynikTMP.push(item);
   positionX = positionX + 1; 
   data;
   if (positionX == lengthPositionTest){
//   if (positionX == 1){
    positionX = 0;
    tableX = tableX + 1;
    wynik.push(wynikTMP);
    wynikTMP = []; 
   }
  if (tableX == listOfWords.length){
//   if (tableX == 2){
    test1 = 3;
   }   
   
 test5 = 0;   
 }
  
  
  text(test3,50,10)
  
 if (test1 == 3){
  text(bbb,10,10)
  text(test3,10,30)
  text(data == undefined,10,50)
  text(item,10,70)
  text(wynik.length,10,90)
  saveStrings(wynik, 'result.txt'); 
  noLoop() 
 }
}