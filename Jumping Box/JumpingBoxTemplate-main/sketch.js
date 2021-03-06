var canvas;
var music;
var box1, box2, box3, box4;
var jBox;


function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(900,600);
    
    box1 = createSprite(110,570,190,20);
    box1.shapeColor = "red"

    box2 = createSprite(335,570,190,20);
    box2.shapeColor = "yellow"

    box3 = createSprite(565,570,190,20)
    box3.shapeColor = "lightblue"

    box4 = createSprite(790,570,190,20)
    box4.shapeColor = "blue"
    
    jBox = createSprite(random(20,880),random(50,550),40,40);
    jBox.shapeColor = "white"
    jBox.velocityX = 4;
    jBox.velocityY = 3;
}

function draw() {
    background("black");

    jBox.bounceOff(box1);
    jBox.bounceOff(box2);
    jBox.bounceOff(box3);
    jBox.bounceOff(box4);

    
    if(jBox.isTouching(box1) ){
        jBox.changeColor = rgb(255,0,0)
    }
    if(jBox.isTouching(box2) ){
        jBox.changeColor = rgb(255,255,0)
    }
    if(jBox.isTouching(box3) ){
        jBox.changeColor = rgb(173,216,230)
    }
    if(jBox.isTouching(box4)){
        jBox.changeColor = rgb(0,0,255)
    }
    drawSprites();
}
