// Timer Section 
const timerEl = document.querySelector('#timerEl');
var startBtn = document.querySelector('#start-button');
var questionBox = document.querySelector('.questionbox');
var container = document.querySelector('#qna');
var card = document.querySelector('.card-contents');
var scoreCard = document.querySelector('.scorecard');
var answer1 = document.querySelector('#answer1');
var answer2 = document.querySelector('#answer2');
var answer3 = document.querySelector('#answer3');
var answer4 = document.querySelector('#answer4');
var scoreCheck = document.querySelector('#check-score')
var submitEl = document.querySelector("#submit");
var nameInput = document.querySelector("#name");
var count = 0;
var secondsLeft = 60;
var timerInterval;

function countdown() {
  
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timerEl.textContent = secondsLeft + " seconds remain";

    if (secondsLeft <= 0) {
      clearInterval(timerInterval);
      timerEl.textContent = "Time is up";
    }

  }, 1000); 
  let landingPage = document.getElementById ("landing-page");
  landingPage.setAttribute("class", "hide");
  questionBox.removeAttribute("class");
}

// Quiz Function 

var quizQuestions= [
{
    question: "Commonly used data types DO NOT include",
    answers: ['strings','booleans','alerts','numbers'],
    correctAnswer: '3'
 },
  {  
    question: "The condition in an if/else statement is enclosed within ______.",
    answers: ['quotes','curly brackets','parentheses','square brackets'],
    correctAnswer: '3'
},
  {
    question: "Arrays in JavaScript can be used to store ______",
    answers: ['numbers and strings','other arrays','booleans','all of the above'],
     correctAnswer: '4'
  },
{  
    question: "A very useful tool used during development and debugging for printing content to the debugger is:",
    answers: ['Javascript','terminal/bash','for loops','console.log'],
    correctAnswer: '4'
  },
{  
    question: "String values must be enclosed within ____ when being assigned to variables",
    answers: ['commas','curly brackets','quotes','parentheses'],
    
    correctAnswer: '3'
}
];

// Hiding the questions 


function displayQuestion(){
  if (count >= quizQuestions.length){
    quizEnd();
    return;
  }

  questionBox.textContent = quizQuestions[count].question;
  answer1.textContent = quizQuestions[count].answers[0];
  answer2.textContent = quizQuestions[count].answers[1];
  answer3.textContent = quizQuestions[count].answers[2];
  answer4.textContent = quizQuestions[count].answers[3];
}

  container.addEventListener("click", function(event) {
    var element = event.target;
    count++
    displayQuestion()

// Checking the answers 
function checkAnswer(event) {
  event.preventDefault();
  var buttonValue = event.target.textContent;
  if (buttonValue == quizQuestions[count].correctAnswer) {
  scoreCheck.textContent = "Correct!"
 }
 else {
    scoreCheck.textContent = "Wrong!"
    secondsLeft -= 15;
    if (secondsLeft <0) {
      secondsLeft = 0;
    }
    timerEl.textContent = secondsLeft;
  }

  count++;
  setTimeout (function (){
    scoreCheck.textContent = "";
    displayQuestion ();
  }, 2000);
}

checkAnswer();

    if(element.matches("#questions")) {
      var elementState = element.getAttribute ("answers");
      if(elementState === "hidden") {
        element.textContent = number;
      } else {
        element.textContent = ""; 
      }
    }
  })

function quizEnd(){
  clearInterval(timerInterval);
  timerEl.textContent = "Quiz Completed";
  scoreCheck.textContent = "Your final score is: "
  document.querySelector("#finished").removeAttribute("class");
  document.querySelector(".questions").setAttribute("style","display:none");
}

// Submit Initials Section 

var name = document.getElementById("saved-name");
var score = document.getElementById("score");
var saveButton = document.getElementById("submit");

function saveScore() {
var quizScore = {
 name: nameInput.value,
score: secondsLeft,
 };

  localStorage.setItem('quizScore', JSON.stringify(quizScore));
 }

 function showScore() {
  var lastGrade = JSON.parse(localStorage.getItem('quizScore'));
  if (lastGrade !== null) {
   document.getElementById('saved-name').innerHTML = lastScore.name;
    document.getElementById('saved-score').innerHTML = lastScore.score;
  }
 }

 saveButton.addEventListener('submit', function (event) {
  event.preventDefault();
  saveSCore();
  showScore();
});

 function init() {
  showScore();
 }
init();


// Action to be performed on click store in named function
function showResponse(event) {
  event.preventDefault();
  console.log(event);
}
startBtn.addEventListener('click', function(event){
  event.preventDefault();
  console.log("event")
  countdown();
  displayQuestion();
  container.classList.remove("hide");



})

answer1.addEventListener("click", checkAnswer);
answer2.addEventListener("click", checkAnswer);
answer3.addEventListener("click", checkAnswer);
answer4.addEventListener("click", checkAnswer);

click.addEventListener("click", checkAnswer)
// Add listener to submit element
submitEl.addEventListener("click", showResponse);
