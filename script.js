var questions = [
    {
        question: "Which of the following animals is the hunting companion of the coyote?",
        choices: ["Cat", "Badger", "Rabbit", "Mouse"],
        correct: "Cat"
    },
    {
        question: "Which animal is known for slapping seals and other mammals out of the ocean?",
        choices: ["Sharks", "Whales", "Killer Whales", "Dolphins"],
        correct: "Killer Whales"
    },
    {
        question: "Which animal CANNOT move their jaw sideways?",
        choices: ["Dogs", "Hamsters", "Birds", "Cats"],
        correct: "Cats"
    }
]
var score = 0
var secondsLeft = 80;
var Q = 0
var questionlist = document.querySelector(".questionlist");
var highScores = JSON.parse(localStorage.getItem("highScores")) || []

// starts the game itself
function startQuiz() {
    // DO NOT REMOVE makes the timer start on button click
    timer()
    
    askQuestion();
}
// runs the game
function askQuestion() {
    questionlist.innerHTML = ""
    var h1E = document.createElement("h1");
    h1E.textContent = questions[Q].question
    questionlist.appendChild(h1E);
    var buttonDiv = document.createElement("div")
    // buttonDiv.innerHTML = ""
    questionlist.appendChild(buttonDiv)
    questions[Q].choices.forEach(choice => {
        let button = document.createElement("button");
        button.textContent = choice;
        button.setAttribute("value", choice)
        button.addEventListener("click", function () {
            if (this.value === questions[Q].correct) {
                score++
            } else {
                secondsLeft -= 10
            }
            Q++
            if (Q === questions.length) { endgame() }
            else { askQuestion() }
        });
        buttonDiv.appendChild(button);

    });
}

function endgame() {
    questionlist.innerHTML = ""
    document.querySelector(".end-screen").classList.remove("hide")
}
// timer DO NOT CHANGE
function timer() {
    var timeEL = document.querySelector(".time");

    var timerInterval = setInterval(function () {
        secondsLeft--;
        timeEL.textContent = "Time: " + secondsLeft;

        if (secondsLeft === 0) {
            clearInterval(timerInterval);
        }
    }, 1000);
}
// button that starts game DO NOT CHANGE
var button = document.querySelector("#start")
button.addEventListener("click", startQuiz)
function start() {
    var landing = document.getElementById("landing");
    if (landing.style.display === "none") {
        landing.style.display = "block"
    } else {
        landing.style.display = "none";
    }
}

document.getElementById("save").addEventListener("click", function () {
    var initials = document.getElementById("initials").value
    var scoreObject = { initials: initials, finalScore: score * secondsLeft }
    highScores.push(scoreObject)
    localStorage.setItem("highScores", JSON.stringify(highScores))
}) 