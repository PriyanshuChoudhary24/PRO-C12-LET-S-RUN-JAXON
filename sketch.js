var path; 
var pathImg;
var boy;
var boyImg; 
var lboundary;
var rboundary;
var edges;

function preload(){
  //pre-load images
 boyImg = loadAnimation("Jake1.png","Jake2.png","jake3.png","jake4.PNG","jake5.png");
 pathImg = loadImage("path.png");
}  
 

function setup(){
  createCanvas(370,400);
  //create sprites here
 path = createSprite(185,200);
 path.addImage(pathImg);
 path.velocityY = 4;

 boy = createSprite(200,300,20,20);
 boy.addAnimation("Running",boyImg);
 
 lboundary = createSprite(10,200,20,400);
 lboundary.visible = false;
 rboundary = createSprite(360,200,20,400);
 rboundary.visible = false;
}

function draw() {
 background(0);
 if(path.y>400){
   path.y=height/2;
 }
 
 boy.x = World.mouseX;
 edges= createEdgeSprites();
 boy.collide(edges);
 
 if(boy.isTouching(lboundary)){
  boy.collide(lboundary);
 };
 if(boy.isTouching(rboundary)){
  boy.collide(rboundary);
 };

 drawSprites();
}