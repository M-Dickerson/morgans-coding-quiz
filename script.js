// variables for game DO NOT CHANGE
var questions =[ "Which of the following animals is the hunting companion of the coyote?", "Which animal is known for slapping seals and other mammals out of the ocean?", "Which animal CANNOT move their jaw sideways?"];
var answer1 = ["Cat", "Sharks", "Dogs"];
var answer2 = ["Badger", "Whales", "Hamsters"];
var answer3 = ["Rabbit", "Killer Whales", "Birds"];
var answer4 = ["Mouse", "Dolphins", "Cats"];
var correct = [1, 2, 3];
// starts the game itself
function startQuiz() {
// DO NOT REMOVE makes the timer start on button click
    timer()
// for displaying logic for questions[i], answer1[i], answer2[i], answer3[i], answer4[i]
    for (let i = 0; i < 1; i++) { 
        var questionlist = document.querySelector(".questionlist");
        var h1E = document.createElement("h1");
        h1E.textContent = questions[0];
        questionlist.appendChild(h1E);
        };
        var button = document.createElement("button");
        button.textContent = answer1;
        questionlist.appendChild(button);

        button.addEventListener("click", secondQuestion);
        button.addEventListener("click", secondQuestion);
}
function secondQuestion () {
    for (let i = 0; i < 1; i++) { 
        var questionlist = document.querySelector(".questionlist");
        var h1E = document.createElement("h1");
        h1E.textContent = questions[1];
        questionlist.appendChild(h1E);
    };
        var button = document.createElement("button");
        button.textContent = answer2;
        questionlist.appendChild(button);

        button.addEventListener("click", thirdQuestion);
        button.addEventListener("click", thirdQuestion);
}
function thirdQuestion () {
    for (let i = 0; i < 1; i++) { 
        var questionlist = document.querySelector(".questionlist");
        var h1E = document.createElement("h1");
        h1E.textContent = questions[2];
        questionlist.appendChild(h1E);
        };
        var button = document.createElement("button");
        button.textContent = answer3;
        questionlist.appendChild(button);
}

// timer DO NOT CHANGE
function timer() {
    var secondsLeft = 80;
    var timeEL = document.querySelector(".time");

    var timerInterval = setInterval(function() {
        secondsLeft--;
        timeEL.textContent = "Time: " + secondsLeft;

        if(secondsLeft === 0) {
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

