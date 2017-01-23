function mOver(obj) {
    obj.innerHTML = "READY"
}
function mOut(obj) {
    obj.innerHTML = "START"
}
var index=0,score=0,total=5,hello,subject;
// questions for html,css,javascript,php
var arr_htm = [{
    "quest":"What is the difference between XML and HTML?",
    "option1":"HTML is used for exchanging data, XML is not",
    "option2":"XML is used for exchanging data, HTML is not",
    "option3":"HTML can have user defined tags, XML cannot",
    "option4":"None of the above",
    "answer":"2"
  },
  {
    "quest":"HTML uses :",
    "option1":"User defined tags",
    "option2":"Pre-specified tags",
    "option3":"Fixed tags defined by the language",
    "option4":"Tags only for linking",
    "answer":"3"
  },
  {
    "quest":"The year in which HTML was first proposed _______.",
    "option1":"1990",
    "option2":"1980",
    "option3":"2000",
    "option4":"1995",
    "answer":"1"
  },
  {
    "quest":"Which of the following is not a browser ? ",
    "option1":"Microsofts Bing",
    "option2":"Netscape Navigator",
    "option3":"Mozilla Firefox",
    "option4":"Opera",
    "answer":"1"
  },
  {
  "quest":"Markup tags tell the web browser",
  "option1":"How to organise the page",
  "option2":"How to display the page",
  "option3":"How to display message box on page",
  "option4":"None of these",
  "answer":"2"
  }];
var arr_php = [{
    "quest":"The filesize() function returns the file size in ___.",
    "option1":"bits",
    "option2":"bytes",
    "option3":"kilobytes",
    "option4":"gigabytes",
    "answer":"2"
  },
  {
    "quest":"PHP is -------- scripting language",
    "option1":"Server-side",
    "option2":"Client-side",
    "option3":"Middle-side",
    "option4":"Out-side",
    "answer":"1"
  },
  {
    "quest":"PHP scripts are executed on _______.",
    "option1":"ISP Computer",
    "option2":"Client Computer",
    "option3":"Server Computer",
    "option4":"It depends on PHP script",
    "answer":"3"
  },
  {
    "quest":"Which of the following is not the scope of variabl in PHP ? ",
    "option1":"Local",
    "option2":"Global",
    "option3":"Static",
    "option4":"Extern",
    "answer":"4"
  },
  {
  "quest":"In PHP variable needs to be declare before assign",
  "option1":"True",
  "option2":"False",
  "option3":"Depends on website",
  "option4":"Depends on server",
  "answer":"2"
}];
var arr_css = [{
    "quest":"The ..........property indicates whether a cell without any content should have a border displayed. ",
    "option1":"blank-cells",
    "option2":"empty-cells",
    "option3":"nocontent-cells",
    "option4":"noborder-cells",
    "answer":"2"
  },
  {
    "quest":"The .............property allows to specify the distance between the list and the text relating to the list.",
    "option1":"list-spacing",
    "option2":"marker-spacing",
    "option3":"marker-offset",
    "option4":"list-offset",
    "answer":"3"
  },
  {
    "quest":"The ........... rule is used to make sure that the property always be applied whether another property appears in CSS.",
    "option1":"@important",
    "option2":"#important",
    "option3":"!important",
    "option4":"!first",
    "answer":"3"
  },
  {
    "quest":"What does CSS stand for ?",
    "option1":"Clear Style Sheet",
    "option2":"Cascading Style Sheet",
    "option3":"Clever Style Sheet",
    "option4":"Cascading stand Sheet",
    "answer":"2"
  },
  {
  "quest":"Which of the following defines 1% of viewport width?",
  "option1":"px",
  "option2":"vh",
  "option3":"vw",
  "option4":"vmin",
  "answer":"3"
  }];
  var arr_js = [{
    "quest":"______ JavaScript is also called client-side JavaScript.",
    "option1":" Microsoft",
    "option2":"Navigator",
    "option3":"LiveWire",
    "option4":"Native",
    "answer":"2"
  },
  {
    "quest":"__________ JavaScript is also called server-side JavaScript.",
    "option1":" Microsoft",
    "option2":"Navigator",
    "option3":"LiveWire",
    "option4":"Native",
    "answer":"3"
  },
  {
    "quest":"Which of the following can't be done with client-side JavaScript?",
    "option1":"Validating a form",
    "option2":"Sending a form's contents by email",
    "option3":" Storing the form's contents to a database file on the server",
    "option4":"None of the above",
    "answer":"3"
  },
  {
    "quest":"Which of the following attribute can hold the JavaScript version? ",
    "option1":"LANGUAGE",
    "option2":"SCRIPT",
    "option3":"VERSION",
    "option4":"None of the above",
    "answer":"1"
  },
  {
  "quest":"Which types of image maps can be used with JavaScript?",
  "option1":"Server-side image maps",
  "option2":"Client-side image maps",
  "option3":"Server-side image maps and Client-side image maps",
  "option4":"None of these",
  "answer":"2"
  }];
  // getting id's of all elements
var content = document.getElementById('content');
var started = document.getElementById('started');
var questions = document.getElementById('que');
var button = document.getElementById('button');
var btn1 = document.getElementById('1');
var btn2= document.getElementById('2');
var btn3 = document.getElementById('3');
var btn4 = document.getElementById('4');
var choice1 = document.getElementById('ch1');
var choice2 = document.getElementById('ch2');
var choice3 = document.getElementById('ch3');
var choice4 = document.getElementById('ch4');
var next = document.getElementById('next');
var types = document.getElementById('types');
var scoring = document.getElementById('scores');
var subject;
// when we click on start button
function startquiz(){
  content.style.display='none';
  types.style.visibility='visible';
}
// when we select html quiz
function go_html(sub){
  subject=sub;
  types.style.display='none';
  started.style.visibility='visible';
  go_html_ques(index);
}
// displaying html questions
function go_html_ques(index)  {
  var ques=arr_htm[index];
  questions.innerHTML = ques.quest;
  choice1.innerHTML = ques.option1;
  choice2.innerHTML = ques.option2;
  choice3.innerHTML = ques.option3;
  choice4.innerHTML = ques.option4;
}
// when we select css quiz
function go_css(sub){
  subject=sub;
  types.style.display='none';
  started.style.visibility='visible';
  go_css_ques(index);
}
// displaying css questions
function go_css_ques(index)  {
  var ques=arr_css[index];
  questions.innerHTML = ques.quest;
  choice1.innerHTML = ques.option1;
  choice2.innerHTML = ques.option2;
  choice3.innerHTML = ques.option3;
  choice4.innerHTML = ques.option4;
}
// when we select php quiz
function go_php(sub){
  subject=sub;
  types.style.display='none';
  started.style.visibility='visible';
  go_php_ques(index);
}
// displaying php questions
function go_php_ques(index)  {
  var ques=arr_php[index];
  questions.innerHTML = ques.quest;
  choice1.innerHTML = ques.option1;
  choice2.innerHTML = ques.option2;
  choice3.innerHTML = ques.option3;
  choice4.innerHTML = ques.option4;
}
// when we select javascript quiz
function go_js(sub){
  subject=sub;
  types.style.display='none';
  started.style.visibility='visible';
  go_js_ques(index);
}
// displaying javascript questions
function go_js_ques(index)  {
  var ques=arr_js[index];
  questions.innerHTML = ques.quest;
  choice1.innerHTML = ques.option1;
  choice2.innerHTML = ques.option2;
  choice3.innerHTML = ques.option3;
  choice4.innerHTML = ques.option4;
}
// getting id of selected type quiz
function get_id(obj){
   hello=obj;
}
// when next button is clicked
function nextques(){
  if(subject=="html")
  {
    if(hello==arr_htm[index].answer)
    {
      score++;
    }
     index=index+1;
     if(index==total)
     {
      started.style.display='none';
      last.style.visibility='visible';
      scoring.innerHTML="Score is "+score+" Out of "+total;
     }
    go_html_ques(index);
  }
  if(subject=="css")
    {
    if(hello==arr_css[index].answer)
    {
      score++;
    }
     index=index+1;
     if(index==total)
     {
      started.style.display='none';
      last.style.visibility='visible';
      scoring.innerHTML="Score is "+score+" Out of "+total;
     }
    go_css_ques(index);
  }
  if(subject=="php")
    {
    if(hello==arr_php[index].answer)
    {
      score++;
    }
     index=index+1;
     if(index==total)
     {
      started.style.display='none';
      last.style.visibility='visible';
      scoring.innerHTML="Score is "+score+" Out of "+total;
     }
    go_php_ques(index);
  }
  if(subject=="js")
    {
    if(hello==arr_js[index].answer)
    {
      score++;
    }
     index=index+1;
     if(index==total)
     {
      started.style.display='none';
      last.style.visibility='visible';
      scoring.innerHTML="Score is "+score+" Out of "+total;
     }
    go_js_ques(index);
  }
}
