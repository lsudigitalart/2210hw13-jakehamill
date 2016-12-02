var angle = 0;
var offset = 1.5;
var scalar = 1.5;
var speed = .09;
var r = 0;

var blue;
var pink;
var shape;
var cloth;
var fur;
var gold;
var ice;
var teal;

var music;
var actualTime = 0;
var loadTime = 0;

var amp;
var fft;



function preload(){
   blue = loadImage("imgs/blue.png");
   pink = loadImage("imgs/pink.png");
   shape = loadImage("imgs/shape.png");
   cloth = loadImage("imgs/cloth.png");
   fur = loadImage("imgs/fur.png");
   gold = loadImage("imgs/gold.png");
   ice = loadImage("imgs/ice.png");
   teal = loadImage("imgs/teal.png");

}

function setup() {
  createCanvas(1000,700);
  music = loadSound("music/music.mp3", playMusic);
  }

function playMusic() {
  loadTime = millis();
  music.loop();

  amp = new p5.Amplitude(.97);
  fft = new p5.FFT(.0);
}

function draw(){
  actualTime = millis() - loadTime;

  var snareSpeed = map(amp.getLevel, .0075, .01);

  if (actualTime > 0 && actualTime < 164000) {
    var x = offset + cos(angle) * scalar;
    var y = offset + sin(angle) * scalar;

    translate(500, 350);
    rotate(r);
    r = r + .01;
    image(pink, x, y);
    image(shape, x, y);
    angle = angle + speed;
    scalar = scalar + speed;

  }
  if (actualTime > 0 && actualTime < 164000) {
    translate(500, 350);
    rotate(r);
    r = r + .00655;
    image(cloth, x, y);
  }
  if (actualTime > 500 && actualTime < 164000) {
    translate(500, 350);
    rotate(r);
    r = r + snareSpeed;
    image(fur, x, y);
  }
  if (actualTime > 2000 && actualTime < 164000) {
    translate(500, 350);
    rotate(r);
    r = r + .0075;
    image(gold, x, y);
  }
  if (actualTime > 3700 && actualTime < 164000) {
    translate(500, 350);
    rotate(r);
    r = r + .0075;
    image(ice, x, y);
  }
  if (actualTime > 5000 && actualTime < 164000) {
    translate(500, 350);
    rotate(r);
    r = r + .0075;
    image(teal, x, y);
  }

  //fill(random(0, 255));
  //ellipse(random(1000), random(700), 100, 100);


}
