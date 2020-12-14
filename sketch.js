const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;


var engine;
var world;
var ground;
var ball;

function setup() {
  createCanvas(600,600); 
  engine=Engine.create();
  world=engine.world;
  
  var ground_options={
    isStatic:true
  }

  ground=Bodies.rectangle(200,590,200,20,ground_options);
  World.add(world,ground);
  
var ball_options={
  restitution: 1.0
}
  
  ball=Bodies.circle(200,200,20,ball_options);
  World.add(world,ball);


  // console.log(object);
  // console.log(object.type);
  // console.log(object.position.x);
  // console.log(object.position.y);
}

function draw() {
  background(50,100,50); 
  Engine.update(engine);
  rectMode(CENTER); 
  rect(ground.position.x,ground.position.y,600,50);
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20);
}