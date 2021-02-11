var wall , thhickness;
var bullet,speed,weight;


function setup() {
  createCanvas(1600,400);
  
  
  speed=random(223,321);
  weight=random(30,52)
  
  thickness=random(22,83);
  

bullet=createSprite(50,200,50,5);
bullet.velocityX=speed;
bullet.shapeColor=color=(225);
  
wall=createSprite(1200,200,thickness,height/2);

wall.shapeColor=color(230,230,230);
//wall.shapeColor = color(80,80,80);

}

function draw() {
  background(0);
 //bullet.sprite.collide(wall.sprite,calcuateDeformation) 



{
      bullet.velocityX=0;
      var damage=0.5 * weight * speed* speed/(thickness*thickness*thickness);
      
      if(damage>10);    
     {
      wall.shapeColor=color(255,0,0);
     }
     if(damage>10);
     {
         wall.shapeColor=color(0,255,0);
     }
}

  drawSprites();
}


function hasCollided(1bullet,1wall)
{
      bulletRightEdge=1bullet.x +bullet.weight;
      wallLeftEdge=1wall.x;
      if(bulletRightEdge>=1wallLeftEdge)
{

      return true

}

return false;


}













