var canvas, backgroundImage, allPlayers;
var playerCount, allChats, filledOut = 0;
//var gameState = 0;
var database;
var passedFinish;
var obstacles, chatbox;
var form, player, game;
function preload(){
    //chatbox = loadImage("images/Chat_img.png");
}

function setup(){
  canvas = createCanvas(displayWidth , displayHeight);
  database = firebase.database();

  //distance = 0;
  //finishedPlayers = 0;
  //yVel = 0;
  //xVel = 0;
  //obstacles=createGroup();

  //xSet = false;
  game = new Game();
  //game.getState();
  game.start();
  
    /*for(i=0;i<5;i++)
  {
    w=random(200,950);
    h=random(-height*4,height-300);
  f1 = createSprite(w,h);
  //car1.debug="true";
  f1.addImage("f1",f2);
  obstacles.add(f1);
 }*/
}


function draw(){
   //start the game
   background(200, 200, 255);
   if(filledOut === 1){
   game.play();
   
   
   game.display()
  }
}