let calque;
let red;
let green;
let blue;
let i;
let size;
let img;
let img1;
let img2;
let img3;
let img4;
let img5;
let img6;
let img7;


function preload(){
  img = loadImage('image/crossAllaince.png');
  img1 = loadImage('image/berserk.png');
  img2 = loadImage('image/DungeonMeshi.png');
  img3 = loadImage('image/jojop5.png');
  img4 = loadImage('image/mob.png');
  img5 = loadImage('image/oyasumu punpun.png');
  img6 = loadImage('image/Sakura.png');
  img7 = loadImage('image/vagabond.png');
}

function setup() {
  createCanvas( windowWidth, 880);

 
  let btn=document.querySelector("button");
  red = document.querySelector("#Red");
  green = document.querySelector("#Green");
  blue = document.querySelector("#Blue");
  size = document.querySelector("#Size");

  const btn1 = document.querySelector('#btn1');

  i= img

  btn1.addEventListener("click",function btnAction(){
    i = img
  });
  btn2.addEventListener("click",function btnAction(){
    i = img1
  });
  btn3.addEventListener("click",function btnAction(){
    i = img6
  });
  btn4.addEventListener("click",function btnAction(){
    i = img5
  });
  btn5.addEventListener("click",function btnAction(){
    i = img4
  });
  btn6.addEventListener("click",function btnAction(){
    i = img7
  });
  btn7.addEventListener("click",function btnAction(){
    i = img3
  });
  btn8.addEventListener("click",function btnAction(){
    i = img2
  });
  btn9.addEventListener("click",function btnAction(){
    location.reload()
  });


  btn.addEventListener("click",function btnAction(){
  saveCanvas()
});
  calque = createGraphics(width,height);

  
}


function draw() {
  background (255);
  image(calque, 0, 0, width, height);
  noCursor();
  noFill();

  stroke(255);
  image (i ,mouseX, mouseY, size.value, size.value);
  stroke(0);

  if(mouseIsPressed){
    calque.noStroke();
    calque.image(i,mouseX, mouseY,size.value, size.value);
  }

  
}

function windowResized(){
  resizeCanvas(windowWidth,windowHeight);
}
