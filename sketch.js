
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

var gameState = "onSling";
function preload()
{
	
}

function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	tree = new Trees(700,400,40,650);
	ground = new Ground(400,695,2000,10)
	boy = new Boy(170,620,10,200);
    stone = new Stone(100,400,20);
	mango1 = new Mango(700,100,20);
	mango2 = new Mango(600,280,20);
	mango3 = new Mango(600,380,20);
	mango4 = new Mango(500,300,20);
	mango5 = new Mango(500,160,20);
	mango6 = new Mango(720,200,20);
  slingshot = new SlingShot(stone.body,{x:100, y:550})
	//Engine.run(engine);
  
}


function draw() {
  
  
  
  background("white");
  Engine.run(engine);
  
  tree.display();
  ground.display();
  boy.display();
  stone.display();
  slingshot.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
 
  detectCollision(stone, mango1);
  detectCollision(stone, mango2);
  detectCollision(stone, mango3);
  detectCollision(stone, mango4);
  detectCollision(stone, mango5);
  detectCollision(stone, mango6);
  
  //mouseDragged();
  //mouseReleased();
  //keyPressed();
  drawSprites();
 
}

function mouseDragged(){
  if(gameState === "onSling"){
  Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
  gameState === "OnSlung"
  }
}


function mouseReleased(){
 // gameState = "launch";
  slingshot.fly();
}

function keyPressed(){
  if(keyCode === 32){
    Matter.body.setPosition(stone.body, {x:100, y:550})
    slingshot.attach(stone.body);
  }
}
function detectCollision(stonex, mangox){
  MangoBP = mangox.body.position
  StoneBP = stonex.body.position
  var distance = dist(StoneBP.x, StoneBP.y, MangoBP.x, MangoBP.y)
  if(distance <= mangox.r + stonex.r){
    Matter.Body.setStatic(mangox.body, false);
  }

}
