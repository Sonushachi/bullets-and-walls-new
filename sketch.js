var bullet,speed,weight;
var wall,thickness;

function setup() {
  createCanvas(1600,400);

  speed = random(221,321);
  weight = random(30,52);
  thickness = random(22,83);

  bullet = createSprite(50,200,70,20);
  bullet.shapeColor = color("white");
  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor = color(80,80,80);
  bullet.velocityX = speed;
  
}

function draw() 
{
  background(0,0,0);  

  if(hasCollided(bullet,wall)){

  
  bullet.velocityX = 0;
  var damage=(0.5 *weight*speed* speed)/(thickness*thickness*thickness);

  if(damage > 10){
    wall.shapeColor = color(255,0,0);
  }
  else{
    wall.shapeColor = color(0,255,0);
  }
}

  drawSprites(); 

}

function hasCollided(lbullet, lwall)
{
 
  bulletRightEdge = lbullet.x + lbullet.width;
  wallLeftEdge = lwall.x;
  if(bulletRightEdge>=wallLeftEdge)
  {
    return true;
  }
   return false;
}
