const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint= Matter.Constraint;

var engine, world;
var pendulum1,pendulum2,pendulum3,pendulum4,pendulum5;
var sling1,sling2,sling3,sling4,sling5;
function setup(){
    var canvas = createCanvas(3000,800);
    engine = Engine.create();
    world = engine.world;
    
    pendulum1=new Pendulum(200,200,80,80);
    pendulum2=new Pendulum(250,200,80,80);
    pendulum3=new Pendulum(360,200,80,80);
    pendulum4=new Pendulum(440,200,80,80);
    pendulum5=new Pendulum(520,200,80,80);

    sling1 = new Sling(pendulum1.body,{x:500,y:50});
    sling2 = new Sling(pendulum2.body,{x:600,y:50});
    sling3 = new Sling(pendulum3.body,{x:700,y:50});
    sling4 = new Sling(pendulum4.body,{x:800,y:50});
    sling5 = new Sling(pendulum5.body,{x:900,y:50});

}

function draw(){
   background(180)
Engine.update(engine);

pendulum1.display();
pendulum2.display();
pendulum3.display();
pendulum4.display();
pendulum5.display();

sling1.display();
sling2.display();
sling3.display();
sling4.display();
sling5.display();
}
function mouseDragged(){
//Matter.Body.setPosition(pendulum3.body,{x:mouseX,y:mouseY})
    Matter.Body.setPosition(pendulum5.body,{x:mouseX,y:mouseY})
}
