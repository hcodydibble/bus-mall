'use strict';

var theImages = ['bag.jpg','banana.jpg','bathroom.jpg','boots.jpg','breakfast.jpg','bubblegum.jpg','chair.jpg',
  'cthulhu.jpg','dog-duck.jpg','dragon.jpg','pen.jpg','pet-sweep.jpg','scissors.jpg','shark.jpg','sweep.png',
  'tauntaun.jpg','unicorn.jpg','usb.gif','water-can.jpg','wine-glass.jpg'];
var imgHolder = document.getElementById('imgHolder');
// var leftImg = document.getElementsByTagName('img')[0];
// var rightImg = document.getElementsByTagName('img')[2];

var imgClicks = 0;
var productArray = [];
var currentDisplay = [];
var previousDisplay = [];

function randomNum(){
  return Math.floor(Math.random() * theImages.length);
}

function ProductImage(name,link,id){
  this.name = name;
  this.link = link;
  this.clicked = 0;
  this.displayed = 0;
}

for (var i = 0; i < theImages.length; i++){
  var imageName = theImages[i].slice(0,-4);
  var linkName = 'img/' + theImages[i];
  productArray.push(new ProductImage(imageName,linkName));
}

function getRandImg(image){
  var randNum = randomNum();
  for (var j = 0; j < currentDisplay.length; j++){
    while (randNum === currentDisplay[j]) {
      randNum = randomNum();
    }
  }
  image.src = productArray[randNum].link;
  image.id = productArray[randNum].name;
  currentDisplay.push(randNum);
}

function switchDisplayArrays(){
  previousDisplay = currentDisplay;
  currentDisplay = [];
}

function makeDatShit(){
  getRandImg(img1.children[0]);
  getRandImg(img2.children[0]);
  getRandImg(img3.children[0]);
  productArray[currentDisplay[0]].displayed++;
  productArray[currentDisplay[1]].displayed++;
  productArray[currentDisplay[2]].displayed++;
}
makeDatShit();

var maxClicks = 0;
var leftClick = document.getElementById('img1');
var centerClick = document.getElementById('img2');
var rightClick = document.getElementById('img3');

function donJuan(event) {
  for (var t = 0; t < productArray.length; t++){
    if (productArray[t].id === event.target.id && maxClicks < 25){
      productArray[t].clicked++;
      maxClicks++;
      switchDisplayArrays();
      makeDatShit();
    }else if (maxClicks === 25){
      leftImg.removeEventListener('click',donJuan);
      centerImg.removeEventListener('click',donJuan);
      rightImg.removeEventListener('click',donJuan);
      var done = document.getElementById('done');
      done.innerText = 'You\'re finished. The test is over. Go home.';
    }
  }
}
// imgHolder.addEventListener('click',donJuan);
leftClick.addEventListener('click',donJuan);
centerClick.addEventListener('click',donJuan);
rightClick.addEventListener('click',donJuan);
