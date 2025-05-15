let topImg;

function preload() {
  topImg = loadImage('https://s4bsa.github.io/diyps/enfants1.jpg');
}

function setup() {
  createCanvas(300, 501);
  cursor('https://s4bsa.github.io/diyps/glass.png', -20, 10); 
  image(topImg, 0, 0);
}

function draw() {
}
