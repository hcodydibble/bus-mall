'use strict';

var theImages = ['bag.jpg','banana.jpg','bathroom.jpg','boots.jpg','breakfast.jpg','bubblegum.jpg','chair.jpg',
  'cthulhu.jpg','dog-duck.jpg','dragon.jpg','pen.jpg','pet-sweep.jpg','scissors.jpg','shark.jpg','sweep.png',
  'tauntaun.jpg','unicorn.jpg','usb.gif','water-can.jpg','wine-glass.jpg'];
var imgHolder = document.getElementById('imgHolder');
var leftImg = document.getElementById('img1').src = '';
var centerImg = document.getElementById('img2').src = '';
var rightImg = document.getElementById('img3').src = '';

var array = [];

function randomNum(){
  return Math.floor(Math.random() * theImages.length);
}

function ProductImage(name,link){
  this.name = name;
  this.link = link;
  this.clicked = 0;
  this.displayed = 0;
}
