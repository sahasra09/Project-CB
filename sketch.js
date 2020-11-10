
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bin1,bin2,bin3;

function setup() {
	createCanvas(800, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bin1 = new Bin(700,700,200,20);
	bin2 = new Bin(680,650,20,100);
	bin3= new Bin(720,650,20,100);
	object1=new Object(200,700,30);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
object1.display();
  bin1.display();
  bin2.display();
  bin3.display();
  drawSprites();
 
}



