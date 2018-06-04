let p = [];

function setup(){
    createCanvas(windowWidth,windowHeight);
    
}

function draw(){
    background(21,43,54);
    
    if(random(1)<0.5){
    p.push(new Particle(windowWidth-400,350));
    }
    
    for(let i=0; i<p.length; i++){
        
    if(p[i].fade()){
        p.splice(i,1);
    }
        
    p[i].update();
    p[i].show();
        
    }
    
}

