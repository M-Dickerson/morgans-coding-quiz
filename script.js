// Variables for timer
var timeEL = document.querySelector(".time");
var secondsLeft = 100;
// Variables for game

// Variables for trivia



// function playGame()
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