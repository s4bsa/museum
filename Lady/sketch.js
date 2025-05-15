let bottomImg, topImg;

function preload() {
  bottomImg = loadImage('https://s4bsa.github.io/diyps/lady perry1.png');
  topImg = loadImage('https://s4bsa.github.io/diyps/Ermine.jpg');
}

function setup() {
  createCanvas(600, 600);
  cursor('https://s4bsa.github.io/diyps/glass.png', -20, 10); 
  image(topImg, 0, 0);
}

function draw() {
}

function mouseDragged() {
  copy(bottomImg, mouseX, mouseY, 60, 60, mouseX, mouseY, 60, 60);
}
