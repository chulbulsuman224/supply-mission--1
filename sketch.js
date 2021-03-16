var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")

}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	packageSprite=createSprite(width/2,10,10);
	packageSprite.addImage(packageIMG);
	packageSprite.scale=0.2;
	packageSprite.velocityY=5;
	packageSprite.visible=false;
	
	helicopterSprite=createSprite(100,200,10,10);
	helicopterSprite.addImage(helicopterIMG);
	helicopterSprite.scale=0.6;
	helicopterSprite.velocityX=4;

	groundSprite=createSprite(width/2,height-35,800,30);
	groundSprite.shapeColor=color("lightgreen")

	
	engine = Engine.create();
	world = engine.world;
	
	
	 //Create a Ground
	 ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);
	
	
	 packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:3, isStatic:true});
	 
	
	
	Engine.run(engine);
	
	
}


function draw() {
	rectMode(CENTER);
	background(0);
   
	ellipseMode(RADIUS);
	ellipse();
	rect();
  
	drawSprites();
	
}

function keyPressed() {
	if (keyCode === DOWN_ARROW) {
	   packageSprite.visible=true;
   
	 }
}



