//https://image.ibb.co/hs0qS8/shaswat.jpg
var circles = [];
var img;
function preload(){
    img = loadImage("data/shaswat.jpg");
}
function setup(){
    createCanvas(560,747);
    var density = displayDensity();
    pixelDensity(1);
    img.loadPixels();
}

function newCircle(){
        var x = random(0,img.width);
        var y = random(0,img.height);
        var valid = true;
        for(var i = 0; i<circles.length; i++){
            var d = dist(x,y, circles[i].x, circles[i].y);
            if(d<circles[i].r){
                valid = false;
                break;
            }
        }
    if(valid){
        var index = (int(x) + int(y)*img.width) * 4;
        var r = img.pixels[index];
        var g = img.pixels[index+1];
        var b = img.pixels[index+2];
        var col = color(r,g,b);
        return new Circle(x,y,col);
    }else{
        return null;
    }
 }

 
function draw(){    
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

   