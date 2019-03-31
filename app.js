'use strict';

//constructor function
function Product(name, imgPath) {
  this.name = name;
  this.imgPath = imgPath;
  this.votes = 0;
  this.views = 0;
  Product.call.push(this);
}

var totalClicks = 0;

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

//Random image generator
function randomImages() {
  var randomIndexOne = Math.floor(Math.random * productArray.length);
  productArray[randomIndexOne].views;
  imgOne.src = productArray[randomIndexOne].imgPath;
  imgOne.setAttribute('data-index', randomIndexOne);

  var randomIndexTwo = Math.floor(Math.random() * productArray.length);
  productArray[randomIndexTwo].views;
  imgTwo.src = productArray[randomIndexTwo].imgPath;
  imgTwo.setAttribute('data-index', randomIndexTwo);

  var randomIndexThree = Math.floor(Math.random * productArray.length);
  productArray[randomIndexThree].views;
  imgThree.src = productArray[randomIndexThree].imgPath;
  imgThree.setAttribute('data-index', randomIndexThree);
}

var imgOne = document.getElementById('imgOne');
imgOne.addEventListener('click', handleClick);

var imgTwo = document.getElementById('imgTwo');
imgTwo.addEventListener('click', handleClick);

var imgThree = document.getElementById('imgThree');
imgThree.addEventListener('click', handleClick);


function handleClick(event) {
  totalClicks++;
  if(totalClicks >= 25) {
    displayResults();
  } else {
    var index event.target.getAttribute('data-index');
    productArray[index].votes++;
  }
}

function calculateViewsToVotes() {
  return votes/views;
}