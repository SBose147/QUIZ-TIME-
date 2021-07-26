var canvas, backgroundImage;

var gameState = 0;
var contestantCount;
var allContestants;
var answer;
var database;

var question, contestant, quiz;


function setup(){
  canvas = createCanvas(displayWidth - 35,displayHeight - 150);
  database = firebase.database();
  quiz = new Quiz();
  quiz.getState();
  quiz.start();
}


function draw(){
  

  if(contestantCount === 2)
  {
    quiz.update(1);
  }
  
  if(gameState === 0)
  {
    background("pink");
    fill(0);   
  }
  
   if(gameState === 1)
  {
    clear();
    quiz.play();
  }

  
  
}