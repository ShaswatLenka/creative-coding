class Test{
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.head = createVector(this.x, this.y);
        this.tail = createVector(this.head.x, this.head.y);
    }
    
    show(){
        createP(this.tail.x);
        createP(this.tail.y);
    }
}



