'use strict';

//constructor function
function Product(name, imgPath) {
  this.name = name;
  this.imgPath = imgPath;
  this.votes = 0;
  this.views = 0;
}

var toalClicks = 0;

//Product array of images...
var productArray = [
  new Product('Bag', 'img/bag.jpg'),
  new Product('Banana', 'img/banana.jpg'),
  new Product('Bathroom', 'img/bathroom.jpg'),
  new Product('Boots', 'img/boots.jpg'),
  new Product('Breakfast', 'img/breakfast.jpg'),
  new Product('Bubblegum', 'img/bubblegun.jpg'),
  new Product('Chair', 'img/chainr.jpg'),
  new Product('Cthulhu', 'img/cthulhu.jpg'),
  new Product('Dog-Duck', 'img/dog-duck.jpg'),
  new Product('Dragon', 'img/dragon.jpg'),
  new Product('Pen', 'img/pen.jpg'),
  new Product('Pet-Sweep', 'img/pet-sweep.jpg'),
  new Product('Scissors', 'img/scissors.jpg'),
  new Product('Shark', 'img/shark.jpg'),
  new Product('Sweep', 'img/sweep.png'),
  new Product('Tauntaun', 'img/tauntaun.jpg'),
  new Product('Unicorn', 'img/unicorn.jpg'),
  new Product('USB', 'img/usb.gif'),
  new Product('Water-Can', 'img/water-can.jpg'),
  new Product('Wine-Glass', 'img/wine-glass.jpg'),
];
