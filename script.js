'use strict';

let numberInput = document.querySelector(".number-input"),
CheckBox = document.querySelector(".check"),
score = document.querySelector(".score"),
guessMessage = document.querySelector(".guess-message"),
highScore = document.querySelector(".highscore"),
againBox = document.querySelector(".again"),
question = document.querySelector(".question"),
body = document.querySelector("body"),
perehodnikScore = score.textContent,
scoreInt = parseInt(perehodnikScore),
perehodnikHighScore = parseInt(highScore.textContent),
highScoreInt = perehodnikHighScore;


highScore.textContent = localStorage.getItem("highestScore");



numberInput.min = 1;
numberInput.max = 20;

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let minNumber = 1; 
let maxNumber = 20;

let randomValue = getRandomNumber(minNumber, maxNumber);


function check() {
    if(scoreInt > 0) {
        scoreInt -= 1;
        score.textContent = scoreInt;
    }
    else {
        body.style.background = "red";
        guessMessage.textContent = "Проигрыш!";
        score.textContent = 0;
    }
    if(numberInput.value > randomValue) {
        guessMessage.textContent = "Слишком много";
    }
    else if (numberInput.value < randomValue) {
        guessMessage.textContent = "Слишком мало";
    }
    else {
        guessMessage.textContent = "Правильно!";
        body.style.background = "green"
        question.textContent = numberInput.value;
        if(scoreInt < highScoreInt) {
            if (localStorage.getItem("highestScore") < highScoreInt) {
                localStorage.setItem("highestScore", highScoreInt);
                highScore.textContent = localStorage.getItem("highestScore");
            }
        }
        else {
            highScore.textContent = scoreInt;
            if (localStorage.getItem("highestScore") < scoreInt) {
                localStorage.setItem("highestScore", scoreInt);
                highScore.textContent = localStorage.getItem("highestScore");
            }
        }
        highScore.textContent = localStorage.getItem("highestScore");
    }
}




function init() {
    CheckBox.addEventListener("click", check);
    againBox.addEventListener("click", function () {
        location.reload();
    })
}

init()