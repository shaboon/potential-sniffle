var scoreLink = document.querySelector(".highscore");
var timerEl = document.querySelector(".clock");

var panikStart = document.querySelector(".startbutton");
var revealQuiz = document.querySelector(".questionbox");
var scoreList = document.querySelector(".previous-scores");
var ask = document.querySelector(".question");
var buttonOne = document.querySelector(".but1");
var buttonTwo = document.querySelector(".but2");
var buttonThree = document.querySelector(".but3");
var buttonFour = document.querySelector(".but4");

var answerResult = document.querySelector(".reveal-answer");

var revealScore = document.querySelector(".form");
var ui = document.querySelector(".ui");
var userInitials = document.querySelector(".initials");
var showScore = document.querySelector(".score");
var formSubmit = document.querySelector(".submit");
var tryAgain = document.querySelector(".refresh");

var progress = 0;
var score = "Nan";
var storedTime = 0;
var displayScore = "";
var timeLeft;
var highScore;
var endValidator = false;

function switchQuestion() {
  progress++;
  console.log(`progress is ${progress}`);
  progressEval();

  const quiz = [
    (quiz1 = {
      question: "Commonly Used Data Types Do NOT Include:",
      but1: {
        choice: "strings",
        but1class: "badchoice",
      },
      but2: {
        choice: "booleans",
        but2class: "badchoice",
      },
      but3: {
        choice: "alerts",
        but3class: "gudchoice",
      },
      but4: {
        choice: "numbers",
        but4class: "badchoice",
      },
    }),
    (quiz2 = {
      question:
        "The condition in an if / else statement is enclosed with _____",
      but1: {
        choice: "quotes",
        but1class: "badchoice",
      },
      but2: {
        choice: "curly brackets",
        but2class: "badchoice",
      },
      but3: {
        choice: "parenthesis",
        but3class: "gudchoice",
      },
      but4: {
        choice: "square brackets",
        but4class: "badchoice",
      },
    }),
    (quiz3 = {
      question: "Arrays in JavaScript can be used to store ______.",
      but1: {
        choice: "quotes",
        but1class: "gudchoice",
      },
      but2: {
        choice: "curly brackets",
        but2class: "badchoice",
      },
      but3: {
        choice: "parenthesis",
        but3class: "badchoice",
      },
      but4: {
        choice: "square brackets",
        but4class: "badchoice",
      },
    }),
    (quiz4 = {
      question:
        "String values must be enclosed within _____ when being assigned to variables.",
      but1: {
        choice: "commas",
        but1class: "badchoice",
      },
      but2: {
        choice: "curly brackets",
        but2class: "badchoice",
      },
      but3: {
        choice: "quotes",
        but3class: "gudchoice",
      },
      but4: {
        choice: "parenthesis",
        but4class: "badchoice",
      },
    }),
    (quiz5 = {
      question:
        "A very useful tool used during development and debugging for printing content to the debugger is:",
      but1: {
        choice: "JavaScript",
        but1class: "badchoice",
      },
      but2: {
        choice: "terminal/bash",
        but2class: "badchoice",
      },
      but3: {
        choice: "for loops",
        but3class: "badchoice",
      },
      but4: {
        choice: "console.log",
        but4class: "gudchoice",
      },
    }),
  ];

  if (progress < 6) {
    console.log(quiz[progress - 1]);
    ask.innerHTML = quiz[progress - 1].question;
    buttonOne.innerHTML = quiz[progress - 1].but1.choice;
    buttonOne.setAttribute("id", quiz[progress - 1].but1.but1class);
    buttonTwo.innerHTML = quiz[progress - 1].but2.choice;
    buttonTwo.setAttribute("id", quiz[progress - 1].but2.but2class);
    buttonThree.innerHTML = quiz[progress - 1].but3.choice;
    buttonThree.setAttribute("id", quiz[progress - 1].but3.but3class);
    buttonFour.innerHTML = quiz[progress - 1].but4.choice;
    buttonFour.setAttribute("id", quiz[progress - 1].but4.but4class);

    var gudAnswer = document.querySelector("#gudchoice");
    var oopsAnswer = document.querySelectorAll("#badchoice");

    gudAnswer.addEventListener("click", rightAnswer);
    for (var i = 0; i < oopsAnswer.length; i++) {
      oopsAnswer[i].addEventListener("click", wrongAnswer);
    }
  }
}

function quizStart() {
  console.log("Start Clicked");
  panikStart.setAttribute("style", "visibility: hidden;");
  revealQuiz.setAttribute("style", "visibility: visible;");
  switchQuestion();
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
      timeLeft = 0;
      timerEl.textContent = timeLeft;
      clearInterval(timeInterval);
      if (endValidator === false) {
        quizEnd();
      }
    }
  }, 1000);
}

function progressEval() {
  if (progress === 7) {
    return quizEnd();
  }
  return;
}

function rightAnswer() {
  score++;

  console.log(`Right Answer`);
  console.log(`Score is ${score}`);
  answerResult.setAttribute("style", "visibility: visible;");
  answerResult.innerHTML = `Good Answer`;
  progressEval();
  switchQuestion();
}

function wrongAnswer() {
  console.log(`Wrong Answer`);
  answerResult.setAttribute("style", "visibility: visible;");
  answerResult.innerHTML = `Sorry, Wrong Answer`;
  if (timeLeft >= 10) {
    timeLeft -= 10;
    console.log(score);
    switchQuestion();
  } else {
    quizEnd();
    return;
  }
}

function quizEnd() {
  endValidator = true;
  if (typeof timeLeft !== "number") {
    return alert("Internal Error, Sorry");
  }
  if (score >= 1) {
    console.log(`quizEnd timeLeft is ${timeLeft}`);
    console.log(`quizEnd storedTime is ${storedTime}`);
    storedTime = timeLeft;
    timeLeft = "";
    displayScore = score * 5 + storedTime;
  } else {
    alert("You Need to Get at Least One Answer Correct, Please Try Again");
    return document.location.reload();
  }

  formSubmit.addEventListener("click", highscoreLog);

  var revealCard = document.querySelector(".reveal-card");

  console.log(`quizEnd seeable score is ${score}`);
  console.log(`quizEnd display score is ${displayScore}`);
  revealQuiz.setAttribute("style", "visibility: hidden;");
  revealCard.setAttribute("style", "display: none;");
  revealScore.setAttribute("style", "visibility: visible;");
  showScore.innerHTML = `Final Score: ${displayScore}`;
}

function highscoreLog() {
  ui.setAttribute("style", "visibility: hidden;");

  console.log(`highscoreLog Started`);
  event.preventDefault();
  var loggedScore = {
    intials: userInitials.value.trim(),
    playerScore: displayScore,
  };
  localStorage.setItem("highScore", JSON.stringify(loggedScore));
  renderScore();
}

function restart() {
  document.location.reload();
}

function renderScore() {
  var highScore = JSON.parse(localStorage.getItem("highScore"));
  if (highScore !== null) {
    var scoreListEl = document.createElement("li");
    scoreListEl.textContent = `${highScore.intials} - ${highScore.playerScore}`;
    scoreList.appendChild(scoreListEl);
  }
}

panikStart.addEventListener("click", quizStart);
tryAgain.addEventListener("click", restart);
document.onload = renderScore();
