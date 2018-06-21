let meteors = [] ;
let tailDensity = 5;
let p, px, py, t;
let i =0;
function setup(){
    createCanvas(windowWidth,windowHeight);
    p  = new Particle(500,300);
    p1 = new Particle(475,275);
    p2 = new Particle(550,350);
    p3 = new Particle(575,375);
    p4 = new Particle(600,400);
    p5 = new Particle(625,425);
    
}

function draw(){
    background(21,43,54);
    p.headShow(25);
    p1.headShow(16);
}



