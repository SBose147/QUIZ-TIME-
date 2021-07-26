class Question {

  constructor() {
    this.title = createElement('h1')
    this.input1 = createInput("Enter Your Name Here");
    this.input2 = createInput("Enter Correct Option No");
    this.button = createButton('Submit');
    
    //this.displayA = createButton('Display Question');
    //this.displayB = createButton('Display Question');
    //this.displayC = createButton('Display Question');

    this.questionA = createElement('h2');
    this.optionA1 = createElement('h3');
    this.optionA2 = createElement('h3');
    this.optionA3 = createElement('h3');
    this.optionA4 = createElement('h3');

    /*this.questionB = createElement('h2');
    this.optionB1 = createElement('h3');
    this.optionB2 = createElement('h3');
    this.optionB3 = createElement('h3');
    this.optionB4 = createElement('h3');

    this.questionC = createElement('h2');
    this.optionC1 = createElement('h3');
    this.optionC2 = createElement('h3');
    this.optionC3 = createElement('h3');
    this.optionC4 = createElement('h3');*/
  }

  hide()
  {
    this.title.hide();
    this.input1.hide();
    this.button.hide();
    this.input2.hide();
  }

  display(){
    this.title.html("Welcome to My Quiz Game");
    this.title.position(500, 0);  

    this.input1.position(500, 230);
    this.input2.position(700, 230);
    this.button.position(660, 300);

    this.questionA.html("Question:- I am tall when I am young.I am short when I am old.What am ? " );
    this.questionA.position(150, 80);
    this.optionA1.html("1: Matchstick" );
    this.optionA1.position(150, 120);
    this.optionA2.html("2: Candle" );
    this.optionA2.position(150, 140);
    this.optionA3.html("3: Children" );
    this.optionA3.position(150, 160);
    this.optionA4.html("4: None of the above" );
    this.optionA4.position(150, 180);
    //this.questionA.display();
    //this.optionA1.display();
    //this.optionA2.display();
    //this.optionA3.display();
    //this.optionA4.display();
    
    //this.displayA.position(670, 400);
    //this.displayB.position(670, 450);
    //this.displayC.position(670, 500);
       
    this.button.mousePressed(()=>{
      this.title.hide();
      this.input1.hide();
      this.input2.hide();
      this.button.hide();
      
      
      this.questionA.hide();
      this.optionA1.hide();
      this.optionA2.hide();
      this.optionA3.hide();
      this.optionA4.hide();
      
     /* this.questionC.hide();
      this.optionC1.hide();
      this.optionC2.hide();
      this.optionC3.hide();
      this.optionC4.hide();*/
    
      contestant.name = this.input1.value();
      contestant.answer = this.input2.value();
      contestantCount+=1;
      contestant.index = contestantCount;
      contestant.update();
      contestant.updateCount(contestantCount);
    });

    //this.displayA.mousePressed(()=>{
    
      
    //});

    /*this.displayB.mousePressed(()=>{
        
      this.questionB.html("Question:- Which is this ? " );
      this.questionB.position(150, 80);
      this.optionB1.html("1: Jennie" );
      this.optionB1.position(150, 120);
      this.optionB2.html("2: Jisoo" );
      this.optionB2.position(150, 140);
      this.optionB3.html("3: Rosé" );
      this.optionB3.position(150, 160);
      this.optionB4.html("4: Lisa" );
      this.optionB4.position(150, 180);
      this.questionB.display();
      this.optionB1.display();
      this.optionB2.display();
      this.optionB3.display();
      this.optionB4.display();
      
    });

    this.displayC.mousePressed(()=>{
 
      this.questionC.html("Question:- What is this ? " );
      this.questionC.position(150, 80);
      this.optionC1.html("1: Jennie" );
      this.optionC1.position(150, 120);
      this.optionC2.html("2: Jisoo" );
      this.optionC2.position(150, 140);
      this.optionC3.html("3: Rosé" );
      this.optionC3.position(150, 160);
      this.optionC4.html("4: Lisa" );
      this.optionC4.position(150, 180);
      this.questionC.display();
      this.optionC1.display();
      this.optionC2.display();
      this.optionC3.display();
      this.optionC4.display();
      /*this.questionB.hide();
      this.optionB1.hide();
      this.optionB2.hide();
      this.optionB3.hide();
      this.optionB4.hide();
    });*/
  }
}
