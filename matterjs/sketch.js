// module aliases
var Engine = Matter.Engine,
    World = Matter.World,
    Bodies = Matter.Bodies;

var engine;
var world;
var boxes = [];

function setup(){
createCanvas(windowWidth,windowHeight);
    
engine = Engine.create(); 
world = engine.world;
//Engine.run(engine);
ground = new Boundary(600,500, 500,50);
}

function mousePressed(){
    boxes.push(new Box(mouseX, mouseY, 50,50));
}

function draw(){
    background(51);
    Engine.update(engine);
for(let i = 0; i<boxes.length; i++){
    boxes[i].show();
}
    ground.show();
}
