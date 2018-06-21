var circles = [];
function setup(){
    createCanvas(windowWidth, windowHeight);
    circles.push(new Circle(random(windowWidth, windowHeight)));
}

function newCircle(){
        var x = random(windowWidth);
        var y = random(windowHeight);
        var valid = true;
        for(var i = 0; i<circles.length; i++){
            var d = dist(x,y, circles[i].x, circles[i].y);
            if(d<circles[i].r){
                valid = false;
                break;
            }
        }
    if(valid){
        return new Circle(x,y);
    }else{
        return null;
    }
 }

 
function draw(){
    background(0);
    
    c = newCircle();
    if(c != null){
        circles.push(c);
    }
    
    for (var i=0; i<circles.length; i++){
        if(circles[i].growing){
            if(circles[i].edges()){
                circles[i].growing = false;
            }else{
                for (var j=0; j<circles.length; j++){
                    if(circles[i] != circles[j]){
                    var d = dist(circles[i].x,circles[i].y, circles[j].x, circles[j].y);
                    if(d<circles[i].r+circles[j].r){
                        circles[i].growing = false;
                        break;
                    }
                }
            }
        }
    }
    
    circles[i].show(); 
    circles[i].grow();
    }
    
   
    
    
    
}

   