let bottomImg, topImg;

function preload() {
  bottomImg = loadImage('https://s4bsa.github.io/diyps/CAW.jpg');
  topImg = loadImage('https://s4bsa.github.io/diyps/Wanderer.png');
}

function setup() {
  createCanvas(720, 720);
  cursor('https://s4bsa.github.io/diyps/brush.png', 0, 0); 
  image(topImg, 0, 0);
}

function draw() {
}

function mouseDragged() {
  copy(bottomImg, mouseX, mouseY, 40, 40, mouseX, mouseY, 40, 40);
}
