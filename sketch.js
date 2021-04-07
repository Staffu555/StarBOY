var starImg,bgImg;
var star, starBody;
var fairy, fairyImg;
//var music;
// music was removed from the code because the file was corrupted 
//// this project was done really quickly and was very boring plus 
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	//music = loadSound("JoyMusic.mp3");
	starImg = loadImage("star.png");
	bgImg = loadImage("starNight.png");
	fairyImg = loadAnimation("fairyImage1.png","fairyImage2.png")
}

function setup() {
	createCanvas(800, 750);
    //music.loop();
	//create fairy sprite and add animation for fairy
	fairy = createSprite(400,325,30,30);
	fairy.addAnimation("fairy",fairyImg);
	fairy.scale = 0.1;
	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;

    
	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {
  background(bgImg);

  star.x= starBody.position.x 
  star.y= starBody.position.y 

  console.log(star.y);

  //write code to stop star in the hand of fairy
  if (star.y>325 && starBody.position.y > 325){
	  Matter.Body.setStatic(starBody,true);
  } 
  drawSprites();

}

function keyPressed() {

	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(starBody,false); 
	}

	if (keyCode === LEFT_ARROW){
		fairy.x = fairy.x -9;
	}
	if (keyCode === RIGHT_ARROW){
		fairy.x = fairy.x +9;
	}
}
