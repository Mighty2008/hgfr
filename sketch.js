var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions= [];
var gameState="PLAY"

var particle;

var divisionHeight=300;
var score =0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new G(400,790,800,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
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
 //text("Score : "+score,20,30);
  Engine.update(engine);
 
  //ground.diplay();                     
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   if(frameCount%60===0){
     particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
     score++;
   }
 
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
text("500",185,600)

text("500",270,600)
text("300",660,600)
text("300",585,600)
text("500",115,600)
text("200",500,600)

text("500",20,600)
text("200",430,600)
text("200",345,600)
text("300",740,600)

text("score:"+score,30,15)


if(particle=null){
particle.display();



if(particle.body.position.x<300&&this.particle.position.y>760){
{
score=score+500;
particle=null;

}}
}



}

function mousePressed(){

  if(gameState!=="end"){

    particle=new Particle(mouseX,10,10,10)
    
    }
    if(gameState!="END"){
      push();
      textSize(50)
     // stroke("blue")
    fill("blue")
    text("GameOver",300,360)
    pop();
    }
  }