var clearScores = document.querySelector(".clear-scores")
clearScores.addEventListener("click", function () {
    localStorage.clear();
    window.location.reload();
})

// Retreives local stroage 
var leaderBoard = localStorage.getItem("leaderBoard");
leaderBoard = JSON.parse(leaderBoard);

if (leaderBoard !== null) {

    for (var i = 0; i < leaderBoard.length; i++) {
        var ol = document.querySelector("ol");
        var createLi = document.createElement("li");
        createLi.textContent = leaderBoard[i].initials + " " + leaderBoard[i].points;
        listHighscores = document.querySelector("#list-highscores");
        ol.appendChild(createLi);

    }
}

var restart = document.querySelector(".restart")
restart.addEventListener("click", function () {
    window.location.replace("./index.html");
})