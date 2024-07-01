let computerNum = 0
let result = document.getElementById("result");
let sendButton = document.getElementById("send-button");
let userInput = document.getElementById("user-input");
let resultArea = document.getElementById("result-area");
let resetButton = document.getElementById("reset-button");
let chances = 3;
let chanceArea = document.getElementById("chance-area");
let gameOver = false;
let history = [];
let historyArea = document.getElementById("history-area");
let rulesIcon = document.getElementById("rules-icon");
let modalBackground = document.querySelector('.modal-background');
let closeModalButton = document.getElementById('close-modal');

sendButton.addEventListener("click", play);
resetButton.addEventListener("click", reset);
userInput.addEventListener("focus", function(){
    userInput.value = "";
})

rulesIcon.addEventListener('click', function() {
    modalBackground.style.display = 'flex';
});

closeModalButton.addEventListener('click', function() {
    modalBackground.style.display = 'none';
});

function randomNum(){
    chances = 3;
    chanceArea.textContent = `남은 기회 : ${chances}번`;
    history = [];
    historyArea.textContent = "당신이 입력한 숫자들 : ";
    computerNum = Math.floor(Math.random() * 50) + 1;
    result.textContent = `정답 : ${computerNum}`;
}

function play(){
    let userValue = userInput.value;

    if(userValue < 1 || userValue > 50){
        resultArea.textContent = "1 ~ 50 사이 숫자를 입력하세요!";
        return 0;
    }

    if(history.includes(userValue)){
        resultArea.textContent = "이미 입력했던 숫자입니다. 다른 숫자를 입력하세요!";
        return 0;
    }

    chances--;
    chanceArea.textContent = `남은 기회 : ${chances}번`;

    if(userValue < computerNum){
        resultArea.textContent = "Up!";
    }
    else if(userValue > computerNum){
        resultArea.textContent = "Down!";
    }
    else{
        resultArea.textContent = "정답!♪♬";
        gameOver = true;
    }

    history.push(userValue);
    historyArea.textContent = `당신이 입력한 숫자들 : ${history}`;

    if(chances < 1){
        gameOver = true;
        if(userValue == computerNum){
            resultArea.textContent = "정답!♪♬";
        }
        else{
            resultArea.textContent = "Game Over...";
        }
    }

    if(gameOver == true){
        sendButton.disabled = true;
    }
}

function reset(){
    userInput.value = "";
    randomNum();
    sendButton.disabled = false;
    gameOver = false;
    resultArea.textContent = "당신이 예측한 숫자에 대한 결과는?";
}

randomNum();