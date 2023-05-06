var scorchedEarth = document.querySelector(".scorch");
var showScores = document.querySelector(".show-scores");

function nukeScores() {
  //Resets highscore text and clears local storage scores
  localStorage.clear("highScore");
  while (showScores.firstChild) {
    showScores.removeChild(showScores.firstChild);
    document.location.reload();
  }
}

function renderScore() {
  //Renders highscores from local storage
  var highScore = JSON.parse(localStorage.getItem("highScore"));
  if (highScore !== null) {
    var scoreList = document.createElement("li");
    scoreList.textContent = `${highScore.intials} - ${highScore.playerScore}`;
    showScores.appendChild(scoreList);
  }
}

scorchedEarth.addEventListener("click", nukeScores); //Event listener for scorched earth button
document.onload = renderScore(); //Renders highscores on page load
