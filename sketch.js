const Engine=Matter.Engine
const Bodies=Matter.Bodies
const World=Matter.World
const Constraint=Matter.Constraint

var engine,world


function setup() {
  createCanvas(900,400);
  engine=Engine.create()
  world=engine.world
  ground=new Ground(495,300,255,10)
  ground2=new Ground(800,200,230,10)
  box1=new Box(430,275)
  box2=new Box(470,275)
  box3=new Box(510,275)
  box4=new Box(550,275)
  box5=new Box(445,230)
  box6=new Box(485,230)
  box7=new Box(525,230)
  box8=new Box(460,170)
  box9=new Box(510,170)
  box10=new Box(485,100)

  box11=new Box(740,170)
  box12=new Box(790,170)
  box13=new Box(840,170)
  box14=new Box(765,100)
  box15=new Box(815,100)
  box16=new Box(790,60)

  ball1=new Ball(200,200)
  chain1=new Chain(ball1.body,{x:100,y:200})
  
}

function draw() {
  background(255,255,255);  
  Engine.update(engine);
  ground.display();
  ground2.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  ball1.display();
  chain1.display();
}

function mouseDragged(){
  Matter.Body.setPosition(ball1.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
  chain1.fly()
}