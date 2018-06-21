class Box{
    constructor(x,y,w,h){
        this.w = w;
        this.h = h;
        
        this.options = {
        friction:0.5,
        restitution:0.4
    }
        this.body = Bodies.rectangle(x, y, w, h, this.options);
        World.add(world, this.body);
    }
    
    show(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        strokeWeight(1);
        stroke(255);
        fill(127);
        rect(0,0, this.w, this.h);
        pop();
    }
}