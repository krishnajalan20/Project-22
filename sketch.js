const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var fairy , fairyImg, fairyVoice;
var star, starBody , starImg;
var backImg;

function preload()
{
	starImg = loadImage("images/star.png");
	fairyImg = loadAnimation("images/fairy1.png","images/fairy2.png");
	backImg = loadImage("images/starnight.png");
	fairyVoice = loadSound("sound/joymusic.mp3");

}

function setup() {
	createCanvas(800, 750);

	fairyVoice.play();

	fairy = createSprite(130, 520);
	fairy.addAnimation("fairyflying",fairyImg);  
	fairy.scale =0.25;

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;


	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	

}


function draw() {
  background(backImg);
  Engine.update(engine);

  star.x= starBody.position.x 
  star.y= starBody.position.y 

  console.log(star.y);

  if(star.y > 470 && starBody.position.y > 470 ){
	Matter.Body.setStatic(starBody,true);
}  

  drawSprites();

}

function keyPressed() {


	if(keyCode === RIGHT_ARROW) {
        fairy.x = fairy.x+40;
	}
	if(keyCode === LEFT_ARROW){
		fairy.x = fairy.x-40;
	}
	if (keyCode === DOWN_ARROW) {
		 Matter.Body.setStatic(starBody,false); 
	}
}