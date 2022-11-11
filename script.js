// Variables for timer
var timeEL = document.querySelector(".time");
var secondsLeft = 20;
// Timer
function setTime() {
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timeEL.textContent = "Time: " + secondsLeft;

        if(secondsLeft === 0) {
            clearInterval(timerInterval);
            sendMessage();
        }

    }, 1000);
}
setTime();

// variables for quiz section
var quizContainer = document.getElementById("questions");
myQuestions = document.getElementById("questions");
// quiz questions
var myQuestions = [
{
    question: "Which of the following animals is a common hunting companion of the coyote?", answers: {
        a: 'Cat',
        b: 'Badger',
        c: 'Rabbit',
        d: 'Mouse'
    },
    correctAnswer: 'b'
},
{
    question: "Which animal is known for slapping seals and other aquatic mammals out of the ocean?",
    answers: {
        a: 'Sharks',
        b: 'Whales',
        c: 'Killer Whales',
        d: 'Dolphins'
    },
    correctAnswer: 'c'
},
]



var targetLanding = document.getElementById("landing");
var btn = document.getElementById("start");
btn.oneclick = function () {
    if (targetLanding.style.display !=="none") {
        targetLanding.style.display = "none";
    } else {
        targetLanding.style.display = "block";
    }
};