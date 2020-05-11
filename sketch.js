var movingRect, fixedRect;

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  fixedRect= createSprite(200,200,80,50);
  movingRect= createSprite(400,200,80,30);
  fixedRect.shapeColor="green";
  movingRect.shapeColor="green";

}

function draw() {
  background(255,255,255);  
  
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;
  if(fixedRect.x-movingRect.x<fixedRect.width/2+movingRect.width/2&& movingRect.x-fixedRect.x<movingRect.width/2+fixedRect.width/2
    &&fixedRect.y-movingRect.y<fixedRect.height/2+movingRect.height/2&& movingRect.y-fixedRect.y<movingRect.height/2+fixedRect.height/2){
    fixedRect.shapeColor="red";
    movingRect.shapeColor="red";
  }
else{
  movingRect.shapeColor="green";
  fixedRect.shapeColor="green";
}


  drawSprites();
}