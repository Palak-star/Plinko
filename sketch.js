const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var plinkos = [];
var particles = [];
var divisions = [];

var divisionHeight = 300;


function setup() {
  createCanvas(500,700);
  engine = Engine.create();
    world = engine.world;

    ground = new Ground(350,695,700,10);

    

    
 
}

function draw() {
  background("black");
  Engine.update(engine);  

  ground.display();
  


  //particle
      for (var j = 0; j < particles.length; j++ ) {
          particles[j].display();
      }
 
      //divisions
  for (var k = 0; k < divisions.length; k++) {
      divisions[k].display();
  }

  //plinkos 1 row
      for (var j = 40; j <=width; j=j+50){
          plinkos.push(new Plinko(j,75));
      }

        //plinkos 2 row
  for (var j = 15; j <=width-10; j=j+50){
    +  plinkos.push(new Plinko(j,175));
  }



  drawSprites();


}