
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var engine, world, paper1, ground, dustbin1, dustbin2, dustbin3; 
function setup() {
    createCanvas(800, 700);
    rectMode(CENTER);

    engine = Engine.create();
    world = engine.world;

    //Create the Bodies Here.
    paper1 = new Paper(72,648, 10);
    ground = new Ground(800,680,1600,20);
    dustbin1 = new Dustbin(560,660, 100, 20);
    dustbin2 = new Dustbin(502,620,20,100);
    dustbin3 = new Dustbin(608,620,20,100);
    

    Engine.run(engine);
  
}

function draw() {
  
  rectMode(CENTER);
  
  background(0);
  
  text(mouseX + ',' + mouseY, 30, 45);
 
    
  paper1.display();

  ground.display();

  dustbin1.display();
  dustbin2.display();
  dustbin3.display();

  
}

function keyPressed(){
    if (keyCode === UP_ARROW ) {
      Matter.Body.applyForce(paper1.body, paper1.body.position, {x: 15,y: -15})
    }
  }



