var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  gameobject1=createSprite(300,200,50,50)
  gameobject1.shapeColor="blue"
  gameobject2=createSprite(200,200,40,40)
  gameobject2.shapeColor="red"

}


function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
if (isTouching(movingRect,gameobject2)){
  movingRect.shapeColor = "blue";
  gameobject2.shapeColor = "blue";
}else{
  movingRect.shapeColor = "green";
  gameobject2.shapeColor = "red";
}
  drawSprites();
}
