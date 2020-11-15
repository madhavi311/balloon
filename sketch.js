var backscene, backimg;
var red_b, pink_b, green_b, blue_b, ri, pi, gi, bi;
var arrow, arrowImg;
var bow, bowImg;


function preload() {
  //load your images here 
  backscene = loadImage("background0.png", "background20.png")
  bowImg = loadImage("bow0.png");
  ri = loadImage("red_balloon0.png");
  pi = loadImage("pink_balloon0.png");
  gi = loadImage("green_balloon0.png");
  bi = loadImage("blue_balloon0.png");
  arrowImg = loadImage("arrow0.png")
}

function setup() {
  createCanvas(200, 200);


  background = createSprite(0, 0, 400, 400);
  background.addImage(backscene)
  background.scale = 2

  bow = createSprite(360, 100, 30, 80);
  bow.addImage(bowImg);
  bow.scale = 1;

  for (var i = 60; i < 390; i = i + 60) {
    red_b = createSprite(50, i, 1, 1);
    red_b.addImage(ri);
    red_b.scale = 0.1;
  }
  for (var i = 120; i < 390; i = i + 60) {
    pink_b = createSprite(100, i, 1, 1);
    pink_b.addImage(pi);

  }
  for (var i = 180; i < 390; i = i + 60) {
    green_b = createSprite(150, i, 1, 1);
    green_b.addImage(gi);
    green_b.scale = 0.1;
  }
  for (var i = 240; i < 390; i = i + 60) {
    blue_b = createSprite(200, i, 1, 1);
    blue_b.addImage(bi);
    blue_b.scale = 0.1;
  }
}

function draw() {

  background.velocityX = -2;



  //add code here
  bow.y = World.mouseY

  makearrow();
  drawSprites()
}

function makearrow() {

  if (background.x < 0) {
    background.x = background.width / 2;
  }
  arrow = createSprite(360, 2, 30, 80);
  arrow.addImage(arrowImg)
  arrow.scale = 0.3;
  if (keyDown("space")) {
    arrow.y = bow.y;
    arrow.velocityX = -3;
  }
}
function spawnred()
{
var red_b = createSprite(0,Math.round(random(20, 370)), 10, 10);
    red_b.addImage(ri);
    red_b.scale = 0.1;
  red_b.velocityX=3;
}