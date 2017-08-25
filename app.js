'use strict';

var theImages = ['bag.jpg','banana.jpg','bathroom.jpg','boots.jpg','breakfast.jpg','bubblegum.jpg','chair.jpg',
  'cthulhu.jpg','dog-duck.jpg','dragon.jpg','pen.jpg','pet-sweep.jpg','scissors.jpg','shark.jpg','sweep.png',
  'tauntaun.jpg','unicorn.jpg','usb.gif','water-can.jpg','wine-glass.jpg'];
var imgHolder = document.getElementById('imgHolder');
var list = document.getElementById('list');
var imgClicks = 0;
var productArray = [];
var currentDisplay = [];
var previousDisplay = [];
var maxClicks = 25;
var canvas = document.getElementById('canvas').getContext('2d');

function updateProduct() {
  try {
    productArray = JSON.parse(localStorage.productName);
  } catch (error){
    console.log('');
  }
}

function randomNum(){
  return Math.floor(Math.random() * theImages.length);
}

function ProductImage(name,link,id){
  this.name = name;
  this.link = link;
  this.id = id;
  this.clicked = 0;
  this.displayed = 0;
}

function allYourBase() {
  for (var i = 0; i < theImages.length; i++){
    var imageName = theImages[i].slice(0,-4);
    var linkName = 'img/' + theImages[i];
    productArray.push(new ProductImage(imageName,linkName,imageName));
  }
  makeDatShit();
  updateProduct();
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

var voteCount = 0;
var leftClick = document.getElementById('img1');
var centerClick = document.getElementById('img2');
var rightClick = document.getElementById('img3');

function donJuan(event) {
  for (var t = 0; t < productArray.length; t++){
    if (productArray[t].id === event.target.id && voteCount < maxClicks){
      productArray[t].clicked++;
      voteCount++;
    }else if (voteCount === maxClicks){
      leftClick.removeEventListener('click',donJuan);
      centerClick.removeEventListener('click',donJuan);
      rightClick.removeEventListener('click',donJuan);
      localStorage.productName = JSON.stringify(productArray);
      var done = document.getElementById('imgHolder');
      done.innerText = 'You\'re finished. The test is over. Go home.';
      var chartConfig = {
        type: 'horizontalBar',
        data: {
          labels: ['bag','banana','bathroom','boots','breakfast','bubblegum','chair',
            'cthulhu','dog-duck','dragon','pen','pet-sweep','scissors','shark','sweep',
            'tauntaun','unicorn','usb','water-can','wine-glass'],
          datasets: [{
            label: 'Number of Votes',
            data: [productArray[0].clicked,productArray[1].clicked,productArray[2].clicked,productArray[3].clicked,productArray[4].clicked,productArray[5].clicked,productArray[6].clicked,productArray[7].clicked,
              productArray[8].clicked,productArray[9].clicked,productArray[10].clicked,productArray[11].clicked,productArray[12].clicked,
              productArray[13].clicked,productArray[14].clicked,productArray[15].clicked,productArray[16].clicked,productArray[17].clicked,productArray[18].clicked,productArray[19].clicked],
            backgroundColor: [
              'rgba(1, 221, 221, 0.3)','rgba(1, 221, 221, 0.3)','rgba(1, 221, 221, 0.3)','rgba(1, 221, 221, 0.3)','rgba(1, 221, 221, 0.3)',
              'rgba(1, 221, 221, 0.3)','rgba(1, 221, 221, 0.3)','rgba(1, 221, 221, 0.3)','rgba(1, 221, 221, 0.3)','rgba(1, 221, 221, 0.3)',
              'rgba(1, 221, 221, 0.3)','rgba(1, 221, 221, 0.3)','rgba(1, 221, 221, 0.3)','rgba(1, 221, 221, 0.3)','rgba(1, 221, 221, 0.3)',
              'rgba(1, 221, 221, 0.3)','rgba(1, 221, 221, 0.3)','rgba(1, 221, 221, 0.3)','rgba(1, 221, 221, 0.3)','rgba(1, 221, 221, 0.3)'
            ],
            borderColor: [
              'rgb(33, 233, 8)','rgb(33, 233, 8)','rgb(33, 233, 8)','rgb(33, 233, 8)','rgb(33, 233, 8)','rgb(33, 233, 8)','rgb(33, 233, 8)',
              'rgb(33, 233, 8)','rgb(33, 233, 8)','rgb(33, 233, 8)','rgb(33, 233, 8)','rgb(33, 233, 8)','rgb(33, 233, 8)','rgb(33, 233, 8)',
              'rgb(33, 233, 8)','rgb(33, 233, 8)','rgb(33, 233, 8)','rgb(33, 233, 8)','rgb(33, 233, 8)','rgb(33, 233, 8)'
            ],
            borderWidth: 3
          }]
        },
        options: {
          title: {
            display: true,
            text: 'Here are your results!'
          },
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero:true
              }
            }]
          }
        }
      };

      var myChart = new Chart(canvas, chartConfig);
      for (var j = 0; j < productArray.length; j++) {
        var li = document.createElement('li');
        li.innerText = productArray[j].name + ' was displayed ' + productArray[j].displayed + ' times. ';
        list.appendChild(li);
      }
      break;
    }
  }
  switchDisplayArrays();
  makeDatShit();
}
leftClick.addEventListener('click',donJuan);
centerClick.addEventListener('click',donJuan);
rightClick.addEventListener('click',donJuan);
allYourBase();
