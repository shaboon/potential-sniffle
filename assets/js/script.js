var panikStart = document.querySelector(".startbutton");
var gudAnswer = document.querySelector(".gudchoice");
var oopsAnswer = document.querySelector(".badchoice");
var answerResult = document.querySelector(".reveal-answer");
var timerEl = document.querySelector(".clock");

var score;
var displayScore;
var timeLeft;
var highScore;

function quizStart() {
  timer;
}

function timer() {
  timeLeft = 75;

  var timeInterval = setInterval(function () {
    timeLeft--;
    timerEl.textContent = timeLeft;
    if (timeLeft === 0) {
      clearInterval(timeInterval);
    }

    //
  }, 1000);
}

function rightAnswer() {
  score++;

  answerResult.textContent = "Correct!";

  switchQuestion;
}

function wrongAnswer() {
  timeLeft - 10;
}

function switchQuestion() {}

function limitReached() {
  displayScore = score * 15;
}

function quizWin() {
  if (score === 5) {
    timeLeft = displayScore;
  }
}

function highscoreLog() {}

// localStorage.setItem("Highscore", JSON.stringify(studentGrade));
// renderMessage();

// Has not been re-adjusted
function renderMessage() {
  var lastGrade = JSON.parse(localStorage.getItem("studentGrade"));
  if (lastGrade !== null) {
    document.querySelector(".message").textContent =
      lastGrade.student + " received a/an " + lastGrade.grade;
  }
}

panikStart.addEventListener("click", quizStart);
gudAnswer.addEventListener("click", rightAnswer);
oopsAnswer.addEventListener("click", wrongAnswer);
