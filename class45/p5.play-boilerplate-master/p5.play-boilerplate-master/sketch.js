var databasehome;
var gamestate=0;
var allPlayers
var car1,car2,car3,car4,cars;
var playercount=0;
var form,player,game;
var carTrack,car1Img,car2Img,car3Img,car4Img,ground;
function preload(){
  
}

function setup(){
    createCanvas(1200,800);
    databasehome=firebase.database();
    game=new Game();
  game.getState();
  game.start();
   
}

function draw(){
    background("white");
 if(playercount===2){
   game.update(1);
 }
 if(gamestate===1){
   clear();
   game.play();
 }
 if(gamestate===2){
   game.end();
 }

   // drawSprites();
}

