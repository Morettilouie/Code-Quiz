var questions = [
    {
        title: "1. Commonly used data types do not include:",
        choices: ["strings", "booleans", "alerts", "numbers"],
        answer: "alerts"
    },
    {
        title: "2. The conditiion in an if else statement is enclosed with ____________",
        choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
        answer: "parentheses"
    },
    {
        title: "3. Arrays in JavaScript can be used to store ____________",
        choices: ["numbers and strings", "other arrays", "booleans", "all of the above"],
        answer: "all of the above"
    },
    {
        title: "4. String values must be enclosed within ____________ when being assigned a variable.",
        choices: ["commas", "curly brackets", "quotes", "parentheses"],
        answer: "quotes"
    },
    {
        title: "5. A very useful tool in development and debugging for printing content to the debugger is:",
        choices: ["JavaScript", "terminal/bash", "for loops", "console.log"],
        answer: "console.log"
    },
];

var quizID = document.querySelector("#quiz-page");
var resultDiv = document.querySelector("#resultDiv");

var timerContainer = document.querySelector(".counter");
var timer = timerContainer.querySelector(".timer");

var questionsEl = document.querySelector(".questionContainer");
var questionDisplay = questionsEl.querySelector(".questionDisplay");
var answersEl = questionsEl.querySelector(".answersContainer");
var answerDisplay = document.createElement("button");

var time = 75;
var penalty = 10;

var correctAnswers = 0;
var index = 0;

function cycleQuestions(index) {
    // clears existing text
    questionsEl.innerHTML = "";
    answersEl.innerHTML = "";

    // cycle through questions
    var question = questions[index].title;
    var options = questions[index].choices;
    questionDisplay.textContent = question;

    // shows all options for each question
    options.forEach(function (item) {
        var answerDisplay = document.createElement("button");
        answerDisplay.setAttribute("class", "choices");
        answerDisplay.setAttribute("value", item);
        answerDisplay.textContent = item;
        questionsEl.appendChild(questionDisplay);
        questionsEl.appendChild(answersEl);
        answersEl.appendChild(answerDisplay);
        answerDisplay.addEventListener("click", checkAnswer)
    })

}

function checkAnswer(event) {
    resultDiv.textContent = "";

    var click = event.target;
    if (click.matches(".choices")) {


        // if correct
        if (click.value == questions[index].answer) {
            resultDiv.textContent = "Correct! The answer is " + questions[index].answer;
            correctAnswers++
            quizID.appendChild(resultDiv);
        } // if incorrect
        else {
            time = time - penalty;
            resultDiv.textContent = "Wrong! the answer is " + questions[index].answer;
            quizID.appendChild(resultDiv);
        }
    }

    // add 1 to move to the next question
    index++;

    if (index >= questions.length) {
        // done with quiz
        clearInterval(timeRemaining);
        timer.textContent = "Your score is: " + time;
        quizFinished()

    } else {
        cycleQuestions(index)
    }
}

function clock() {
    timeRemaining = setInterval(function () {
        time--;
        timer.textContent = "Time remaining: " + time;
        if (time <= 0) {
            clearInterval(timeRemaining);
            timer.textContent = "Out of time!"
            quizFinished()
        }
    }, 1000);
}

function quizFinished() {
    document.querySelector("#quiz-page").classList.add("hide");
    document.querySelector("#highscore").classList.remove("hide");

    var highscore = document.querySelector("#highscore")
    var submitHighscores = highscore.querySelector(".submit-highscore")
    submitHighscores.addEventListener("click", function () {
        var initials = document.querySelector(".initials").value;
        if (initials === "") {
            alert("No value entered!");
        } else {
            var score = {
                initials: initials,
                points: time
            }
            console.log(score);
            var leaderBoard = localStorage.getItem("leaderBoard");
            if (leaderBoard === null) {
                leaderBoard = [];
            } else {
                leaderBoard = JSON.parse(leaderBoard);
            }
            leaderBoard.push(score);
            var addScore = JSON.stringify(leaderBoard);
            localStorage.setItem("leaderBoard", addScore);
            // show leaderboard
            viewLeaderboard()
        }
    })
}

function viewLeaderboard() {
    document.querySelector("#highscore").classList.add("hide");
    document.querySelector("#list-highscores").classList.remove("hide");

    var clearScores = document.querySelector(".clear-scores")
    clearScores.addEventListener("click", function() {
        localStorage.clear();
    })

    // Retreives local stroage 
var leaderBoard = localStorage.getItem("leaderBoard");
leaderBoard = JSON.parse(leaderBoard);

if (leaderBoard !== null) {

    for (var i = 0; i < leaderBoard.length; i++) {

        var createLi = document.createElement("li");
        createLi.textContent = leaderBoard[i].initials + " " + leaderBoard[i].points;
        listHighscores = document.querySelector("#list-highscores");
        listHighscores.appendChild(createLi);

    }
}

var restart = document.querySelector(".restart")
    restart.addEventListener("click", function() {
        window.location.reload();
    })
}

function startQuiz() {
    document.querySelector("#start").classList.add("hide");

    clock();
    cycleQuestions(index)
}

var startBtn = document.querySelector("#start-button");
startBtn.addEventListener("click", startQuiz);