let pi;
let pistr = "";
let piarr = [];

function preload(){
    pi = loadStrings('pi.txt');
}

function setup(){
    createCanvas(windowWidth,windowHeight);
    background(0);
    for (let i = 0; i<pi.length; i++){
        pistr = pistr+pi[i];
    }
    piarr.push(pistr);
    pi = int(piarr[0].split("").splice(2,100000));
    print(pi);
}

function draw(){
    
}