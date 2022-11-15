// variables for timer
var timeEL = document.querySelector(".time");
var secondsLeft = 20;
// timer
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

// variables for quiz

// quiz questions
var questions = [
{
    question: "Which of the following animals is the hunting companion of the coyote?", 
    answers: {
        a: 'Cat', correct: false,
        b: 'Badger', correct: true,
        c: 'Rabbit', correct: false,
        d: 'Mouse', correct: false
    },
},
{
    question: "Which animal is known for slapping seals and other mammals out of the ocean?",
    answers: {
        a: 'Sharks', correct: false,
        b: 'Whales', correct: false,
        c: 'Killer Whales', correct: true,
        d: 'Dolphins', correct: false
    },
},
{
    question: "Which animal CANNOT move their jaw sideways?",
    answers: {
        a: 'Dogs', correct: false,
        b: 'Hamsters', correct: false,
        c: 'Birds', correct: false,
        d: 'Cats', correct: true
    },
}
]
// button
function myFunction() {
    var landing = document.getElementById("landing");
    if (landing.style.display === "none") {
        landing.style.display = "block";
    } else {
        landing.style.display = "none";
    }
}