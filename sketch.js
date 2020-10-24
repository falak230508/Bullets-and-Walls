//global variables
var wall , thickness ;
var bullet ,  speed , weight;


function setup() {
//creating the canvas  
createCanvas(1600,400);

//giving random positon to weught and speed
  speed = random(30,52);
  weight = random(223,321);

//creating the car sprite
bullet = createSprite(50,200, 50,20);
bullet.velocityX = speed;
bullet.shapeColor = "red";

//creating the wall sprite
wall = createSprite(1200,200,thickness,height/2);
wall.shapeColor =color(80,80,80);

thickness = random(22,83);

}

function draw() {
  background("pink");

  if(hasCollided(bullet , wall))
  {
    bullet.velocityX=0;
    var damage = 0.5 * weight * speed * speed/(thickness * thickness * thickness);

   if(damage>10)
   {
    wall.shapeColor = color(255,0,0);

   }

   if(damage<10)
   {
     wall.shapeColor = color(0,255,0);

   }
  


  }


  drawSprites();
}

function hasCollided(lbullet , lwall)
{
  bulletRightEdge = bullet.x + lbullet.width;
  wallLeftEdge = lwall.x;
  if ( bulletRightEdge>= wallLeftEdge )
  {
    return true;
  }
  return false;
}

