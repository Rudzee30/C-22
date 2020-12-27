//create ground using physics engine
//to use physics engine we need 3 objects:engine, world & bodies
//since these 3 objects are a part of matter.js library they are referred as matter.engine, matter.world, matter.bodies

//constant is just like variable but constant can not change the value stored in it
const Engine = Matter.Engine; //Engine= creates physics engine  ===> universe
const World = Matter.World;   //World= creates physical world and add objects to it  ===> planets
const Bodies = Matter.Bodies; //Bodies=create objects which inhabit the world  ===> humans living on planet earth

var engine, world, object,ob1;

function setup() {
  createCanvas(400,400);

  //creating my own engine
  engine = Engine.create();
  //create my own world inside my own engine
  world = engine.world;

  //applying new property static(stable/stationary)
  var options = {
    isStatic: true
  }

  //create my own object
  object = Bodies.rectangle(200,390,400,20, options);
  //now adding my own object to my own world
  World.add(world, object);

  var ob1_options = {
    restitution: 0.8 // to make ball bounce
  }

  ob1=Bodies.circle(200,200,20,ob1_options)
  World.add(world,ob1);
}

function draw() {
  background("black");  

  //update physics engine
  Engine.update(engine);

 //to get the rectangle in center
  rectMode(CENTER);
  ellipseMode(CENTER);
  //displaying my own object
  rect(object.position.x, object.position.y,400,20);
  ellipse(ob1.position.x,ob1.position.y,20,20);
 
}