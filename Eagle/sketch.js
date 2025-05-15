let bottomImg, topImg;

function preload() {
  bottomImg = loadImage('https://s4bsa.github.io/diyps/CAW.jpg');
  topImg = loadImage('https://s4bsa.github.io/diyps/Wanderer.png');
}
function setup() {
  createCanvas(720, 720);

  noCursor();
  cursor('https://s4bsa.github.io/diyps/brush.png', 20, -10);

  image(topImg, 0, 0);
}
function mouseDragged() {
  copy(bottomImg, mouseX, mouseY, 40, 40, mouseX, mouseY, 40, 40);
}