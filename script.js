// variables for game
var question = ["Which of the following animals is the hunting companion of the coyote?", "Which animal is known for slapping seals and other mammals out of the ocean?", "Which animal CANNOT move their jaw sideways?"];
var answer1 = ["a. Moose", "a. Sharks", "a. Dogs"];
var answer2 = ["b. Badger", "b. Whales", "b. Hamsters",];
var answer3 = ["c. Rabbit", "c. Killer Whales", "c. Birds",];
var answer4 = ["d. Mouse", "d. Dolphins", "d. Cats",];
var correctAnswers = ["b. Badger", "c. Killer Whales", "d. Cats"];
// appends the game variables to the page
var body = document.body;
var h1El = document.createElement("h1");
h1El.textContent = question
body.appendChild(h1El)

var listEl = document.createElement("ol");
var li1 = document.createElement("li");
var li2 = document.createElement("li");
var li3 = document.createElement("li");
var li4 = document.createElement("li");

li1.textContent = answer1;
li2.textContent = answer2;
li3.textContent = answer3;
li4.textContent = answer4;
listEl.appendChild(li1);
listEl.appendChild(li2);
listEl.appendChild(li3);
listEl.appendChild(li4);


// starts the game itself
function startQuiz() {
    timer()

}

// timer
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

// button that starts game
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

