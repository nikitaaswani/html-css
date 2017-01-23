
function question(text,choices,answer){
  this.text=text;
  this.choices=choices;
  this.answer=answer;
}
question.prototype.correctans=function(choice){
  return choice===this.answer;
}
