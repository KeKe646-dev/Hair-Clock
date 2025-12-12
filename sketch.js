// Custom Drawing vars
let mainBod;
let mainHair;
let frontArm;
let BB;
let shampoo;
// Music/Sound vars
let bgm;
let minpass;
let hourpass;
// Time vars
let s;
let m;
let h;

function preload(){
 bgm= loadSound ("Miku Clock bgm.mp3"); 
  minpass= loadSound("Minute passed.wav");
  hourpass= loadSound("Hour passed.wav");
}




function setup() {
  createCanvas(500, 500);
bgm.loop()
  
  mainBod = loadImage("Main body.png");
  mainHair = loadImage("Main hair.png");
  frontArm = loadImage("Front arm.png");
  BB = loadImage("Blush eyebrows.png");
  shampoo = loadImage("Shampoo.png");
}

function draw() {
 s = second();
  m = minute();
  h = hour();
  background(220, 150, 200);

  
  rects = map(s, 0, 60, 1, 150);
 
  
  push()
  translate(1,30)
  noStroke();
   fill("#7ccce5");
  rotate(-0.2)
  stroke("black")
  strokeWeight(3)
  rect(100, 50,70, 200 +rects,25);
  pop()
  

   image(mainBod, 0, 0);
  image(mainHair, 0, 0);
  image(BB, 0, 0);
  
  push()
  translate(1,30)
  noStroke();
   fill("#7ccce5");
  rotate(-0.2)
  stroke("black")
  strokeWeight(3)
  rect(280, 50,70, 200 +rects,25);
  pop()
  
 
  image(shampoo, 0, 0);
  image(frontArm, 0, 0);
}
