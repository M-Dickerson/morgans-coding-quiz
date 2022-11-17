// variables for game DO NOT CHANGE
var questions =[ "Which of the following animals is the hunting companion of the coyote?", "Which animal is known for slapping seals and other mammals out of the ocean?", "Which animal CANNOT move their jaw sideways?"];
var answer1 = ["Cat", "Badger", "Rabbit", "Mouse"];
var answer2 = ["Sharks", "Whales", "Killer Whales", "Dolphins"];
var answer3 = ["Dogs", "Hamsters", "Birds", "Cats"];
var correct = [1, 2, 3];
// starts the game itself
function startQuiz() {
// DO NOT REMOVE makes the timer start on button click
    timer()
// for displaying logic for questions[i], answer1[i], answer2[i], answer3[i], answer4[i]
    for (let i = 0; i < 1; i++) { 
        // pulls questionlist over from html
        var questionlist = document.querySelector(".questionlist");
        // creates h1 for heading
        var h1E = document.createElement("h1");
        h1E.textContent = questions[i];
        questionlist.appendChild(h1E);
        // puts each array item into button
        answer1.forEach(Element=> {
            let button = document.createElement("button");
            button.textContent = Element;
            document.body.appendChild(button);

            button.addEventListener("click", () => {
                button.style.display = "none";
                h1E.style.display = "none";
                secondQuestion();
                });
        });
    }
}
function secondQuestion () {
    for (let i = 0; i < 1; i++) {
        var questionlist = document.querySelector(".questionlist");
        var h1E = document.createElement("h1");
        h1E.textContent = questions[1];
        questionlist.appendChild(h1E);
        
        answer2.forEach(answer2=> {
            let button = document.createElement("button");
            button.textContent = answer2;
            document.body.appendChild(button);

        button.addEventListener("click", () => {
            button.style.display = "none";
            h1E.style.display = "none";
            thirdQuestion();
            });
        });
    }
    }
    function thirdQuestion () {
        for (let i = 0; i < 1; i++) { 
            
            var questionlist = document.querySelector(".questionlist");
            var h1E = document.createElement("h1");
            h1E.textContent = questions[2];
            questionlist.appendChild(h1E);
            
            answer3.forEach(answer3=> {
                let button = document.createElement("button");
                button.textContent = answer3;
                document.body.appendChild(button);
            
            button.addEventListener("click", () => {
                button.style.display = "none";
                h1E.style.display = "none";
                });
            });
        }
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

