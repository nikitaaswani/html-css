function populate(){
  if(quiz.isEnded()){
    showScores();
  }
  else{
    //show question
    var element=document.getElementById("question");
    // console.log(element);
    element.innerHTML=quiz.getQuestionIndex().text;
    // show choices
    var choices=quiz.getQuestionIndex().choices;
    for(var i=0;i<choices.length;i++){
      var element=document.getElementById("ch"+i);
      element.innerHTML=choices[i];
      guess("btn"+i,choices[i]);
    }
  }
};
var questions=[
    new question("which of the following is not an object oriented programming language?",["java","C#","C++","C"],"C"),
    new question("which of the following is used for styling wepages?",["HTML","jquery","CSS","XML"],"CSS"),
    new question("The java compiler translates source code?",["Assembly Code","Machine Code","Byte Code","JVM Code"],"Byte Code"),
    new question("which of the following is not a feature of object oriented programming language?",["Encapsulation","Inheritence","Polymorphism","Parallelism"],"Parallelism"),
    new question("MVC is a ________.",["Language","Library","Framework","All"],"Framework")
];

var quiz=new Quiz(questions);
populate();

function guess(id,guess){
  var button=document.getElementById(id);
  button.onclick=function(){
    quiz.guess(guess);
    populate();
  }
}
function showScores(){
  var gameOverHtml="<h1>Result</h1>";
      gameOverHtml+="<h2 id="score">Your scores:"+quiz.score+"</h2>";
      var element=document.getElementById("content1");
     element.innerHTML=gameOverHtml;
}


