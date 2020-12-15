
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground;
var paper,paper1;
var wallL, wallR, wallB,wallImage;
var dustbinImage;

function preload()
{
dustbinImage = loadImage("dustbingreen.png")
}

function setup() {
	createCanvas(1000,400);


	engine = Engine.create();
  world = engine.world;
//GROUND
  var options = {

    isStatic:true,

   }
    ground = Bodies.rectangle(300,360,1000,10,options);
    World.add(world, ground);

//CREATING PAPER N DUSTBIN
paper = new Paper(50,350,15);
wallL= new Dustbin(445,305,10,100,options)
wallR= new Dustbin(555,305,10,100,options)
wallB= new Dustbin(500,350,100,10,options)
	Engine.run(engine);
  
}


function draw() {
  background("WHITE");
  rectMode(CENTER);
  rect(ground.position.x, ground.position.y,1000,10);
  paper.display();
  wallB.display();
  wallL.display();
  wallR.display();
  imageMode(CENTER);
  image(dustbinImage, 500, 300, 125,110)
  
}


function keyPressed(){

if(keyCode===UP_ARROW){
Matter.Body.applyForce(paper.body, paper.position, {x:25, y:-26});

}

}
