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

var index = 0;

function cycleQuestions() {
    // clears existing text
    questionsEl.innerHTML = "";
    answersEl. innerHTML = "";
    
    // cycle through questions and answers
    for (var i = 0; i < questions.length; i++) {
        var question = questions[index].title;
        var options = questions[index].choices;
        questionDisplay.textContent = question;
    }
    options.forEach(function(item) {
        var listEl = document.createElement("li");
        listEl.textContent = item;
        questionsEl.appendChild(questionDisplay);
        questionsEl.appendChild(answersEl);
        answersEl.appendChild(listEl)
    })
}

var questionsEl = document.querySelector(".questionContainer");
var questionDisplay = questionsEl.querySelector(".questionDisplay");
var answersEl = questionsEl.querySelector(".answersContainer")
function startQuiz() {
    document.querySelector("#start").classList.add("hide");

    cycleQuestions()
}

var startBtn = document.querySelector("#start-button");
startBtn.addEventListener("click", startQuiz);