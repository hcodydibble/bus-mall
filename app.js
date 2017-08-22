'use strict';

var theImages = ['bag.jpg','banana.jpg','bathroom.jpg','boots.jpg','breakfast.jpg','bubblegum.jpg','chair.jpg',
  'cthulhu.jpg','dog-duck.jpg','dragon.jpg','pen.jpg','pet-sweep.jpg','scissors.jpg','shark.jpg','sweep.png',
  'tauntaun.jpg','unicorn.jpg','usb.gif','water-can.jpg','wine-glass.jpg'];
var imgHolder = document.getElementById('imgHolder');
var leftImg = document.getElementById('img1');
var centerImg = document.getElementById('img2');
var rightImg = document.getElementById('img3');

var productArray = [];
var currentDisplay = [];
var previousDisplay = [];

function randomNum(){
  return Math.floor(Math.random() * theImages.length);
}

function ProductImage(name,link){
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

for (var j = 0; j < 3; j++){
  var randImg = productArray[randomNum()];
  currentDisplay.push(randImg);
}
