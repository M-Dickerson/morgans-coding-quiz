// variables for game
var questions =[
{   question: "Which of the following animals is the hunting companion of the coyote?",
    answers: [{option: "Cat", correct: false}, {option: "Badger", correct: true}, {option: "Rabbit", correct: false}, {option: "Mouse", correct: false}],
},
{   question: "Which animal is known for slapping seals and other mammals out of the ocean?",
    answers: [{option: "Sharks", correct: false}, {option: "Whales", correct: false}, {option: "Killer Whales", correct: true}, {option: "Dolphins", correct: false}],
},
{   question: "Which animal CANNOT move their jaw sideways?",
    answers: [{option: "Dogs", correct: false}, {option: "Hamsters", correct: false}, {option: "Birds", correct: false}, {option: "Cats", correct: true}],
}]
// appends the game question to the page
var questionlist = document.querySelector(".questionlist");
var h1E = document.createElement("h1");
h1E.textContent = questions.question;
questionlist.appendChild(h1E);
console.log(questionlist)

var listEl = document.createElement("ol");
var li1 = document.createElement("li");
var li2 = document.createElement("li");
var li3 = document.createElement("li");
var li4 = document.createElement("li");

li1.textContent = questions.option;
listEl.appendChild(li1);
questionlist.appendChild(listEl);


// starts the game itself
function startQuiz() {
    timer()

    questionlist.textContent = questions.title;
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

