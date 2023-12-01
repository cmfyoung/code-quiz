// Dom Elements
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

//Quiz time variables

var count = 0;
var secondsLeft = 60;
var timerInterval;

//Countdown timer function

function countdown() {
  
    timerInterval = setInterval(function() {
    secondsLeft--;
    timerEl.textContent = secondsLeft + " seconds remain";

    if (secondsLeft <= 0) {
      clearInterval(timerInterval);
      timerEl.textContent = "Time is up";
    }

  }, 1000); 

  //Hide Landing Page and Show Quiz Questions
  let landingPage = document.getElementById ("landing-page");
  landingPage.setAttribute("class", "hide");
  questionBox.removeAttribute("class");
}

// Quiz Function 

var quizQuestions= [
{
    question: "Commonly used data types DO NOT include",
    answers: ['strings','booleans','alerts','numbers'],
    correctAnswer: 3
 },
  {  
    question: "The condition in an if/else statement is enclosed within ______.",
    answers: ['quotes','curly brackets','parentheses','square brackets'],
    correctAnswer: 2
},
  {
    question: "Arrays in JavaScript can be used to store ______",
    answers: ['numbers and strings','other arrays','booleans','all of the above'],
     correctAnswer: 4
  },
{  
    question: "A very useful tool used during development and debugging for printing content to the debugger is:",
    answers: ['Javascript','terminal/bash','for loops','console.log'],
    correctAnswer: 4
  },
{  
    question: "String values must be enclosed within ____ when being assigned to variables",
    answers: ['commas','curly brackets','quotes','parentheses'],
    
    correctAnswer: 3
}
];

// Display Questions function


function displayQuestion(){
  if (count >= quizQuestions.length){
    quizEnd();
    return;
  }

  questionBox.textContent = quizQuestions[count].question;
  answer1.innerHTML = "Answer 1: " + quizQuestions[count].answers[0];
  answer2.innerHTML = "Answer 2: " + quizQuestions[count].answers[1];
  answer3.innerHTML = "Answer 3: " + quizQuestions[count].answers[2];
  answer4.innerHTML = "Answer 4: " + quizQuestions[count].answers[3];
}
//Event Listener for clicks on the quiz container
  container.addEventListener("click", function(event) {
    var element = event.target;
    count++
    displayQuestion()

// Checking the answers 
function checkAnswer() {
  var buttonValue = parseInt(event.target.value);

  if (buttonValue === quizQuestions[count].correctAnswer) {
    scoreCheck.textContent = "Correct!";
  }
  else {
    scoreCheck.textContent = "Wrong!";
    secondsLeft -= 15;
    if (secondsLeft < 0) {
      secondsLeft = 0;
    }
    timerEl.textContent = secondsLeft;
  }
  

  setTimeout(function () {
    scoreCheck.textContent = "";
    scoreCheck.classList.add("hide")

  }, 1000);
}

scoreCheck.classList.remove("hide")
checkAnswer();

    if(element.matches("#qna")) {
      var elementState = element.getAttribute("answers");
      if(elementState === "hidden") {
        element.textContent = number;
      } else {
        element.textContent = ""; 
      }
    }
  })

//Quiz End Function

function quizEnd(){
  clearInterval(timerInterval);
  timerEl.textContent = "Quiz Completed";
  scoreCheck.textContent = "Your final score is:  "
  document.querySelector("#finished").removeAttribute("class");
  document.querySelector(".questions").setAttribute("style","display:none");
  document.querySelector(".scorecard").classList.remove('hide');
}

// Submit Initials Section 

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
   document.getElementById('saved-name').innerHTML = lastGrade.name;
   document.getElementById('saved-score').innerHTML = lastGrade.score;
  }
 }
var saveButton=document.getElementById("submitForm");

 saveButton.addEventListener('submit', function (event) {
  event.preventDefault();
  saveScore();
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

// Add listener to submit element
submitEl.addEventListener("click", showResponse);