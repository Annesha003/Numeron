//var urlParams = new URLSearchParams(window.location.search);
//console.log(urlParams);
//var score = urlParams.get("score");
 //console.log(score)
 var score=localStorage.getItem("myScore");
var scoreBoard = document.getElementById("score-box");

var playAgainButton = document.getElementById("play-again-button");

scoreBoard.innerHTML = score;
playAgainButton.onclick = (evt) => {
  location.href = "./game.html";
};