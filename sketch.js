const Engine = Matter.Engine;
const World = Matter.World;
const Events = Matter.Events;
const Bodies = Matter.Bodies;
 
var particles;
var plinkos = [];
var divisions = [];

var divisionsHeight=300;

var score =0;
var gameState = 0
var count = 0

function setup() {

  createCanvas(800, 800);

  textSize(30)
  fill("white")
  text("Score : "+score,20,30);
  
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(width/2,height,width,20);

   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionsHeight/2, 10, divisionsHeight));
   }

    for (var j = 75; j <=width; j=j+50) 
    {    
      plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
      plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
      plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
      plinkos.push(new Plinko(j,375));
    }
}

function draw() {

  background("black");
  textSize(20)
  text("Score : "+ score,20,30);

  textSize(25)
  text(500,20,540);
  text(500,100,540);
  text(500,180,540);
  text(500,260,540);
  text(100,340,540);
  text(100,420,540);
  text(100,500,540);
  text(200,580,540);
  text(200,660,540);
  text(200,740,540);

  Engine.update(engine);
   
  ground.display();

   for (var i = 0; i < plinkos.length; i++) {
     plinkos[i].display();
   }
   
  //if(frameCount%60===0){
  //particles.push(new Particles(random(width/2-30, width/2+30), 10,10));
  //score++;}
  //for (var j = 0; j < particles.length; j++) {
  // particles[j].display();}
 
 if(particles){ particles.display(); }
  
  for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
   
}

function mousePressed(){
  if(gameState !== "end"){
  count++
  particles = new Particles(mouseX,10,10,10)
  }
  }
