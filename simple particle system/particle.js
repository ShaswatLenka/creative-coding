
class Particle{
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.head = createVector(this.x, this.y);
        this.tail = createVector(this.x, this.y);
        this.tailVel = createVector(random(5),-5);
        this.alpha = 255;
        this.fallVel = createVector(-0.5,0.5);
    }
    
    
    update(){
        this.head.add(this.fallVel);
        this.tail.add(this.tailVel);
        this.alpha -= 5;
    }
    
    
    fade(){
        return this.alpha < 0 ;
    }
    
    headShow(x){
        stroke(21,45,54);
        fill(255,14,0);
        ellipse(this.head.x, this.head.y, x);
    }
    
    tailShow(x){
        stroke(21,45,54);
        fill(255,14,0, this.alpha);
        ellipse(this.tail.x, this.tail.y, x);
    }
}