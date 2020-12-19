var fixedrect,movingrect
function setup() {
  createCanvas(800,400);
  movingrect=createSprite(400, 200, 50, 50);
  fixedrect=createSprite(400,300,60,60)
  bus=createSprite(10,250,40,70)
  car=createSprite(300,250,40,70)
  car.velocityX=-1
  bus.velocityX=1
}

function draw() {
  background(255,255,255);  
  movingrect.x=mouseX
  movingrect.y=mouseY
   bounceOff(bus,car)
   if(isTouching(bus,car)){
     bus.shapeColor="black"
     car.shapeColor="black"
   }
   if(isTouching(movingrect,fixedrect)){
     fixedrect.shapeColor="red"
     movingrect.shapeColor="red"
   }
  drawSprites();
}