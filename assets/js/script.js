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

var questionsEl = document.querySelector(".questionContainer");
var questionDisplay = questionsEl.querySelector(".questionDisplay");
var answersEl = questionsEl.querySelector(".answersContainer");
var answerDisplay = document.createElement("li");

var time = 75;
var penalty = 10;

var index = 0;

function cycleQuestions() {
    // clears existing text
    questionsEl.innerHTML = "";
    answersEl. innerHTML = "";
    
    // cycle through questions and answers
    // for (var i = 0; i < questions.length; i++) {
        var question = questions[index].title;
        var options = questions[index].choices;
        questionDisplay.textContent = question;
    // }
    options.forEach(function(item) {
        var answerDisplay = document.createElement("li");
        answerDisplay.textContent = item;
        questionsEl.appendChild(questionDisplay);
        questionsEl.appendChild(answersEl);
        answersEl.appendChild(answerDisplay);
        answerDisplay.addEventListener("click", checkAnswer)
    })
}

function checkAnswer(event) {
    var click = event.target;

    if (click.matches("li")) {
        var resultDiv = document.createElement("div");
        resultDiv.setAttribute("id", "resultDiv");

        // if correct
        if (click.textContent == questions[index].answer) {
            resultDiv.textContent = "Correct! The answer is " + questions[index].answer;
        } // if incorrect
        else {
            time = time - penalty;
            resultDiv.textContent = "Wrong! the answer is " + questions[index].answer;
        }
    }

    // add 1 to move to the next question
    index++;

    if (index >= questions.length) {
        // done with quiz

    } else {
        cycleQuestions
    }
}

function startQuiz() {
    document.querySelector("#start").classList.add("hide");

    cycleQuestions()
}

var startBtn = document.querySelector("#start-button");
startBtn.addEventListener("click", startQuiz);