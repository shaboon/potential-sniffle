var panikStart = document.querySelector(".startbutton");
var revealQuiz = document.querySelector(".questionbox");
var gudAnswer = document.querySelector(".gudchoice");
var oopsAnswer = document.querySelector(".badchoice");
var answerResult = document.querySelector(".reveal-answer");
var timerEl = document.querySelector(".clock");

var score = "Nan";
var displayScore = "";
var timeLeft;
var highScore;

function quizStart() {
  console.log("Start Clicked");
  revealQuiz.setAttribute("style", "visibility: visible;");
  score = 0;
  timer();
}

function timer() {
  timeLeft = 75;

  var timeInterval = setInterval(function () {
    timeLeft--;
    timerEl.textContent = timeLeft;
    console.log(timeLeft + " seconds left...");
    if (timeLeft <= 0) {
      clearInterval(timeInterval);
      limitReached();
    }
  }, 1000);
}

function rightAnswer() {
  score++;

  console.log(score);
  answerResult.textContent = "Correct!";

  switchQuestion;
}

function wrongAnswer() {
  if (timeLeft >= 10) {
    timeLeft -= 10;
  } else {
    timeLeft = 0;
    limitReached();
    return;
  }

  console.log(score);
}

function switchQuestion() {}

function limitReached() {
  alert("Dang, you lost");
  displayScore = score * 15;
}

function quizWin() {
  if (score === 5) {
    timeLeft = displayScore;
  }
}

// function highscoreLog() {}

// localStorage.setItem("highScore", JSON.stringify(studentGrade));
// renderMessage();

// function renderMessage() {
//   var highScore = JSON.parse(localStorage.getItem("highScore"));
// }

panikStart.addEventListener("click", quizStart);
gudAnswer.addEventListener("click", rightAnswer);
oopsAnswer.addEventListener("click", wrongAnswer);
