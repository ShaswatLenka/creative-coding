class Circle {
    constructor(x,y,c){
        this.x = x;
        this.y = y;
        this.r = 1.5;
        this.color = c;
        this.growing = true;
    }
    
  show(){
     fill(this.color);
     noStroke();
     ellipse(this.x,this.y, this.r, this.r);
 }
    
  grow(){
      if(this.growing){
      this.r = this.r+0.2;
      }
  }
    edges(){
        return (this.x + this.r == windowHeight || this.y + this.r == windowHeight || this.x - this.r < 0 || this.y - this.r <0);
    }
}