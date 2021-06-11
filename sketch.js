var car,wall;

var speed,weight;

function setup() 
{
  speed = random(55,90);
  weight = random(400,1500);
  
  createCanvas(1600,400);

  car = createSprite(50, 200, 50, 50);
  car.shapeColor="white";
  car.velocityX = speed;

  wall = createSprite(1500, 200, 60, 300);
  wall.shapeColor=rgb(60,60,60);
}

function draw() 
{
  background("#73C2FB");  

  if(wall.x-car.x < (car.width + wall.width)/2)
  {
    car.velocityX = 0;
    var deformation = 0.5 * wieght * speed * speed/22500;
    if(deformation>180)
    {
      car.shapeColor=(255,0,0);
    }

    if(deformation<180 && deformation>80)
    {
      car.shapeColor = (255,247,0);
    }

    if(deformation<80)
    {
       car.shapeColor = (0,255,0);
    }
  }

  drawSprites();
}