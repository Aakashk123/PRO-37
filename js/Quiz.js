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
    question.hide();
    //write code to change the background color here
    background("purple");
    //write code to show a heading for showing the result of Quiz
    textSize(30);
    fill("black");
 text("Result Of The Quiz",340,50);
 text("------ -- --- ----",320,60);
     //call getContestantInfo( ) here
    Contestant.getPlayerInfo();

    //write condition to check if contestantInfor is not undefined
    if(allContestants!==undefined){
    fill("blue");
    textSize(20);
    text("*Note: Contestant Who Answered Correctly Are Highlighted In Green",130,230);
    var display_position= 230;
    for(var plr in allContestants){
      var correctAns="2";
      if(correctAns === allContestants[plr].answer)
      fill("green");
      else
      fill("red");
      display_position+=30;
      textSize(15);
      text(allContestant[plr].name + ":"+allContestants[plr].answer,250,display_position )
    }
    }
    //write code to add a note here

    //write code to highlight contest who answered correctly
    
  }

}
