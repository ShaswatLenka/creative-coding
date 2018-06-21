class Circle {
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.r = 1;
        this.growing = true;
    }
    
  show(){
     stroke(255);
     noFill();
     ellipse(this.x,this.y, this.r*2, this.r*2);
 }
    
  grow(){
      if(this.growing){
      this.r = this.r+1;
      }
  }
    edges(){
        return (this.x + this.r == windowHeight || this.y + this.r == windowHeight || this.x - this.r < 0 || this.y - this.r <0);
    }
}