const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var ground;
var ball,rope;
var ball_con;
var block1;
var block2;
var block3;
var block4;
var block5;
var block6;
var block7;
var block8;
var block9;
var blockIMG
var crane;

function setup() 
{
  createCanvas(900,700);
  frameRate(80);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(450,680,1000,20);

  rope = new Rope(8,{x:500,y:150});
  ball = Bodies.circle(500,200,15);
  Matter.Composite.add(rope.body,ball);

  ball_con = new Link(rope,ball);
  var block_options={
    isStatic:false,
    restitution:0.5
  }
  block1 = Bodies.rectangle(200,600,70,70,block_options);
  World.add(world,block1);
  block2 = Bodies.rectangle(200,430,70,70,block_options);
  World.add(world,block2);
  block3 = Bodies.rectangle(200,360,70,70,block_options);
  World.add(world,block3);
  block4 = Bodies.rectangle(200,290,70,70,block_options);
  World.add(world,block4);
  block5 = Bodies.rectangle(200,210,70,70,block_options);
  World.add(world,block5);
  block6 = Bodies.rectangle(200,140,70,70,block_options);
  World.add(world,block6);
  block7 = Bodies.rectangle(200,70,70,70,block_options);
  World.add(world,block7);
  block8 = Bodies.rectangle(200,30,70,70,block_options);
  World.add(world,block8);
  crane = Bodies.rectangle(700,150,100,20);

  rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50)
  
}

function draw() 
{
  background(51);
  rope.show();
  ellipse(ball.position.x,ball.position.y,30,30);
  rect(block1.position.x,block1.position.y,70,70);
  rect(block2.position.x,block2.position.y,70,70);
  rect(block3.position.x,block3.position.y,70,70);
  rect(block4.position.x,block4.position.y,70,70);
  rect(block5.position.x,block5.position.y,70,70);
  rect(block6.position.x,block6.position.y,70,70);
  rect(block7.position.x,block7.position.y,70,70);
  rect(block8.position.x,block8.position.y,70,70);
  rect(crane.position.x,crane.position.y,500,20);
  Engine.update(engine);
  ground.show();
  
 
   
}


function keyPressed()
{
  
    if(keyCode ===RIGHT_ARROW)
    {
      Matter.Body.applyForce(ball,{x:0,y:0},{x:0.02,y:0});
	}
	if(keyCode ===LEFT_ARROW)
    {
      Matter.Body.applyForce(ball,{x:0,y:0},{x:-0.02,y:0});
	}
  if(keyCode ===UP_ARROW)
    {
      Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.02});
	}
  if(keyCode ===DOWN_ARROW)
    {
      Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:0.02});
	}
}
