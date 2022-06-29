var questions = [
    "1. Commonly used data types do not include:",
    "2. The conditiion in an if else statement is enclosed with ____________",
    "3. Arrays in JavaScript can be used to store ____________",
    "4. String values must be enclosed within ____________ when being assigned a variable.",
    "5. A very useful tool in development and debugging for printing content to the debugger is:"
];
var answers = [
    Q1 = ["strings", "booleans", "alerts", "numbers"],
    Q2 = ["quotes", "curly brackets", "parenthesis", "square brackets"],
    Q3 = ["numbers and strings", "other arrays", "booleans", "all of the above"],
    Q4 = ["commas", "curly brackets", "quotes", "parenthesis"],
    Q5 = ["JavaScript", "terminal/bash", "for loops", "console.log"]
]
function cycleQuestions() {
    console.log("TEST");
}

questionsEl = document.querySelector(".questions");
questionDisplay = questionsEl.querySelector(".header");
answersEl = questionsEl.querySelector(".btn")
answersDisplay = document.createElement("button");

function startQuiz() {
    document.querySelector("#start").classList.add("hide");

    for (i = 0; i < questions.length; i++) {
        questionDisplay.textContent = questions[i];
        
        for (j = 0; j < answers[i].length; j++) {
            console.log(answers[i][j]);
            
            answersDisplay.textContent = answers[i][j];
            answersEl.appendChild(answersDisplay);
            
            
            answersDisplay.addEventListener("click", cycleQuestions)
        }
        
        console.log("test");
    }
    
}

console.log(answers);

// function startQuiz() {
//     document.querySelector("#start").classList.add("hide");
//     document.querySelector(".Q1").classList.remove("hide")
// };
// function question2() {
//     document.querySelector(".Q1").classList.add("hide");
//     document.querySelector(".Q2").classList.remove("hide")
// };
// function question3() {
//     document.querySelector(".Q2").classList.add("hide");
//     document.querySelector(".Q3").classList.remove("hide")
// };
// function question4() {
//     document.querySelector(".Q3").classList.add("hide");
//     document.querySelector(".Q4").classList.remove("hide")
// };
// function questionFive() {
//     document.querySelector(".Q4").classList.add("hide");
//     document.querySelector(".Q5").classList.remove("hide")
// };

var startBtn = document.querySelector("#start-button");
startBtn.addEventListener("click", startQuiz);

// var question1Box = document.querySelector(".Q1");
// var answer1 = question1Box.querySelectorAll(".q1answer");
// answer1.forEach(function (x) {
//     x.addEventListener("click", question2)
// });

// var question2Box = document.querySelector(".Q2");
// var answer2 = question2Box.querySelectorAll(".q2answer");
// answer2.forEach(function (x) {
//     x.addEventListener("click", question3)
// });

// var question3Box = document.querySelector(".Q3");
// var answer3 = question2Box.querySelectorAll(".q3answer");
// answer3.forEach(function (x) {
//     x.addEventListener("click", question4)
// });

// var question4Box = document.querySelector(".Q4");
// var answer4 = question2Box.querySelectorAll(".q4answer");
// answer2.forEach(function (x) {
//     x.addEventListener("click", questionFive)
// });

// var question5Box = document.querySelector(".Q5");
// var answer5 = question2Box.querySelectorAll(".q5answer");
// answer2.forEach(function (x) {
//     x.addEventListener("click", highscore)
// });