class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    //write code here to hide question elements
    //question.hide();
    //write code to change the background color here
    background("aqua");
    //write code to show a heading for showing the result of Quiz

    //call getContestantInfo( ) here
    Contestant.getContestantInfo();
    //write condition to check if contestantInfor is not undefined
    
    if(allContestants!==0)
    {
      //write code to add a note here
      fill(0);
      textSize(20);
      text("NOTE : THE PLAYER WHO ANSWERED CORRECTLY IS HIGHLIGHTED IN GREEN",100,100)
    }
    //write code to highlight contest who answered correctly
    
    var displayPosition = 150
    for(var plr in allContestants)
    {
      
      //console.log("hello");
      var correctAns = "2";
      if(correctAns === allContestants[plr].answer)
      {
        fill("green");
      }
      else
      {
        fill("red");
      }
      //console.log(allContestants[plr])
      text(allContestants[plr].name + " : " + allContestants[plr].answer,120,displayPosition);
    displayPosition += 20;    
  }  
    
   }
  

}
