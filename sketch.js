
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dust1,dust2,dust3;
var ground;
var paper;


function preload(){
}

function setup() {
	createCanvas(1200,500);


	engine = Engine.create();
  world = engine.world;
  

	//Create the Bodies Here.
	dust1=new Dustbin(width-130,height-50,200,20)
	dust2=new Dustbin(width-30,height-90,20,300)
	dust3=new Dustbin(width-230,height-90,20,300)
	
	ground=new Ground(600,height-29,1200,20)
	
    paper=new Paper(50,200,35)

  Engine.run(engine);
  
 
}


function draw() {
  rectMode(CENTER);
  background(255,255,255);
  
  paper.display();
  dust1.display();
  dust2.display();
  dust3.display();
  
  ground.display();
  

  keyPressed();
  drawSprites();
 
}

function keyPressed() {

if (keyCode === UP_ARROW) {
  Matter.Body.applyForce(paper.body,paper.body.position,{x:180,y:-220})
} 

if(paper.body.position.x>width-695){
  Matter.Body.applyForce(paper.body,paper.body.position,{x:174,y:468})
}




}
