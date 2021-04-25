var car,wall,speed,weight;


function setup() {
  createCanvas(1600,400);
  car = createSprite(50, 20, 50, 50);
  wall = createSprite(1500,200,60,400);
  


  speed = random(1,20);
  weight = random(400,1500);

}

function draw() {
  background(255,255,255);  


  car.velocityX = speed;

  if(wall.x - car.x < (car.width + wall.width)/2)
  {
  car.veloctiyX = 0;
  var deformation = 0.5 * weight * speed * speed/22500;
  }

  if(deformation < 100){
    car.shapeColor = color(255,0,0);
  }

  if (deformation < 100 && deformation > 100)
    car.shapeColor = color(230,230,0);
  

  if(deformation < 100){
    car.shapeColor = color(0,255,0);
  }

  drawSprites();
}