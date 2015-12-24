//Question class
function Question(qu, a1, a2, a3, a4, correctIndex){
        this.qu = qu;
        this.a=new Array(a1,a2,a3,a4);
        this.correct=correctIndex;
}
//create questions
var question1 = new Question("Which of the following fruits is in season even during the winter?", "Oranges<img src='images/orange.png'alt='orange' height=30px/>", "Watermelon<img src='images/watermelon.png'alt='watermelon' height=30px/>", "Strawberries<img src='images/strawberries.png'alt='strawberries' height=30px/>", "Grapes<img src='images/grapes.png'alt='grapes' height=30px/>", 0 );
var question2 = new Question("Which of the following will be sold more during Thanksgiving time than throughout the year?", "Potato<img src='images/potato.png'alt='potato' height=30px/>", "Pumpkin<img src='images/pumpkin.png'alt='pumpkin' height=30px/>", "Strawberries<img src='images/strawberries.png'alt='strawberries' height=30px/>", "Mango<img src='images/mango.png'alt='mango' height=30px/>", 1 );
var question3 = new Question("If something is in season and in high demand, you should:", "Sell less at a higher price", "Sell more at a higher price", "Sell more at a competitive price", "Sell less for cheaper", 2 );
var question4 = new Question("It's a beautiful summer day, 75 degrees Farenheit. I should: ", "Sell common ingredients for soup, like potatoes and celery", "Not buy too much because it is too hot for people to come", "Leave the stand and enjoy my day", "Sell refreshing fruits like berries and mangos", 3);
var question5 = new Question("Which is not a reason why the chances of something selling would decrease?", "It's freeeezzzinng outside!", "The price is too high.", "There are very few of it.", "None of the above", 2);
//put questions in array
var questions = new Array(question1, question2,question3, question4, question5);
//declare variables
var numQuestionsAsked=0;
var totalQuestions = questions.length;
var currentQuestionIndex;
var numCorrect = 0;

function displayRandomQuestion(){
    document.getElementById("buttons").style.display="inline";
    document.getElementById("result").style.display="none";
    currentQuestionIndex = Math.floor(Math.random()*questions.length);
    document.getElementById("questionSection").style.display="inline";
    numQuestionsAsked++;
    document.getElementById("questionNumber").innerText ="Qu " + numQuestionsAsked + " of " + totalQuestions;
    document.getElementById("question").innerHTML = questions[currentQuestionIndex].qu.toString();
    var answers = document.getElementById("answers");
    answers.innerHTML="";
    for(i = 0; i<4; i++){
        answers.innerHTML+="<input type='radio' name='answer' value = '" + i + "' required>" + questions[currentQuestionIndex].a[i].toString() +"<br>";
    }
}
function correct(){
    var correct = new Audio('./sounds/correct.mp3');
    correct.volume=0.2;
    correct.play();
    //remove the question from the list
    questions.splice(currentQuestionIndex,1);
    numCorrect++;
    document.getElementById("buttons").style.display="none";
    var result = document.getElementById("result");
    result.style.display="inline";
    result.style.color="green";

    result.innerHTML="Correct! <br>";
    if(numQuestionsAsked==totalQuestions){
        result.innerHTML+="<button id='done' class='ui-btn' onclick='done()'>Done</button>";
    }
    else
        result.innerHTML+="<button id='next' class='ui-btn' onclick='displayRandomQuestion()'>Next</button>";
}
function wrong(){
    var wrong = new Audio('sounds/wrong.mp3');
    wrong.volume=0.2;
    wrong.play();
    document.getElementById("buttons").style.display="none";
    var result = document.getElementById("result");
    result.style.display="inline";
    result.style.color="red";
    result.innerHTML="Sorry, that's not right. The correct answer is "+ (questions[currentQuestionIndex].a[questions[currentQuestionIndex].correct]).toString() +"<br>";
    if(numQuestionsAsked==totalQuestions){
        result.innerHTML+="<button id='done' class='ui-btn' onclick='done()'>Done</button>";
    }
    else
        result.innerHTML+="<button id='next' class='ui-btn' onclick='displayRandomQuestion()'>Next</button>";
    questions.splice(currentQuestionIndex,1);
}
function start(){
    document.getElementById("start").style.display="none";
    document.getElementById('goodluck').style.display='none';
    displayRandomQuestion();
}
function check(){
    var form = document.getElementById("form");    
    var radios = form.answer;

    for (var i=0, iLen=radios.length; i<iLen; i++) {
        radios[i].disabled = true;  
    } 
    if(form.elements["answer"].value==(questions[currentQuestionIndex]).correct){
        correct();
    }
    else{
        wrong();
    }
}
function done(){
    document.getElementById("questionSection").style.display="none";
    var result =document.getElementById("result");
    result.style.display="inline";
    result.style.color="black";
    result.innerHTML="<button class='ui-btn' onclick=location.reload();>Try again?</button><a href=Play.html class='ui-btn' data-ajax='false'>Play</a><br><h2 id='goodluck' style='text-align:center; font-size:300%'>YOU GOT " + numCorrect + "/" + totalQuestions + "! </h2>";
}