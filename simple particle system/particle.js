
class Particle{
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.pos = createVector(this.x, this.y);
        this.vel = createVector(random(2),-2);
        this.alpha = 255;
    }
    
    
    update(){
        this.pos.add(this.vel);
        this.alpha -= 5;
        
    }
    
    fade(){
        return this.alpha < 0 ;
    }
    
    
    
    show(){
        stroke(255);
        fill(255,this.alpha);
        ellipse(this.pos.x, this.pos.y, 16);
    }
}