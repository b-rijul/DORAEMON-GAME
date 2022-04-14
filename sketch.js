var doraemon1,doraemon1Img;
var scared, scaredImg;
var doracake, doracakeImg;
var mouse,mouseImg;
var bg,bgImg;
var ground;
var score = 0;

function preload() {
    doraemon1Img=loadAnimation("doraemon123.png");
    scaredImg=loadAnimation("scared.png");
    doracakeImg=loadImage("doracake.png");
    mouseImg=loadImage("mouse.png");
    bgImg=loadImage("bg.png");
}

function setup() {
    createCanvas(600,550);

    bg = createSprite(100,150);
    bg.addImage(bgImg);
    bg.velocityX = -5;

    doraemon=createSprite(100,400,20,20);
    doraemon.addAnimation("doraemon",doraemon1Img);
    doraemon.addAnimation("scared",scaredImg);
    doraemon.scale=0.13;
    doraemon.debug=false;
    doraemon.setCollider("rectangle",0,0,500,1150);
    
    ground=createSprite(500,490,800,10);
    ground.visible=false;

    mouseGroup = new Group();
    foodGroup= new Group();
}

function draw() {
    background(0);

    if(bg.x<0){
        bg.x = bg.width/2;
      }

      doraemon.collide(ground);
     

      if(doraemon.isTouching(mouseGroup)){
        mouseGroup.destroyEach();
        bg.velocityX =-5;
        doraemon.changeAnimation("scared");
        score=score-2;
       }
      
     if(doraemon.isTouching(foodGroup)){
        foodGroup.destroyEach();
        bg.velocityX = -5;
        doraemon.changeAnimation("doraemon");
        score=score+2;
       }

       if(doraemon.isTouching(foodGroup)){
        score=score+2;
      }

      if(keyDown("space") && doraemon.y >= 100){
        doraemon.y = doraemon.y - 20;  
      }  
       doraemon.velocityY = doraemon.velocityY + 0.8;

    spawnMouse();
    spawnFood();

    drawSprites();

    fill("red");
    textSize(35);
    text("SCORE : "+ score,200,50);
}

function spawnMouse() {
    if(frameCount % 120 === 0) {
      var mouse = createSprite(600,440,10,40);
      mouse.velocityX = -9;
      mouse.addImage(mouseImg);      
      mouse.scale = 0.1;
      mouse.lifetime = 1000;
      mouse.setCollider("rectangle",0,0,0,0)
      mouseGroup.add(mouse);
    }
  }
  
  function spawnFood() {
    if(frameCount % 70 === 0) {
      var food = createSprite(600,370,10,40);
      food.velocityX = -9;
      food.addImage(doracakeImg);      
      food.scale = 0.1;
      food.lifetime = 1000;
      food.setCollider("rectangle",0,0,0,0);
      foodGroup.add(food);
    }
  }
  