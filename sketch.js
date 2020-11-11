var monkey , monkey_running,ground
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
  
 
}



function setup() {
  createCanvas(600,400)
  
monkey = createSprite(80,315,20,20)
  monkey.addAnimation("running",monkey_running)
  monkey.scale=0.1
  
  ground=createSprite(400,350,900,10)
  ground.velocityX=-5

  console.log(ground.x)
  
  
}


function draw() {
 background("white")
  drawSprites()
  
  if (ground.x<200)
  ground.x = ground.width/2
  
  
 
  
   if(keyDown("space")&& monkey.y >=300 ) {
       monkey.velocityY = -16;}
  
  monkey.velocityY = monkey.velocityY + 0.8
  
   monkey.collide(ground)
   
   if (frameCount%80===0){
     
    food() 
   }
  
  if(frameCount%300===0){
    
    obstacles()
  }
  
  
   console.log(monkey.y)
}

function food(){
  
  banana=createSprite(600,Math.round(random(160,300)))
  banana.addImage(bananaImage)
  banana.scale=0.1
  banana.velocityX=-5;
  banana.lifetime=200
}

function obstacles (){
  obstacle = createSprite (350,350,10,10)
  obstacle.addImage(obstacleImage)
  obstacle.scale=0.1
  obstacle.velocityX=-5
  obstacle.lifetime=200
  
  
}









