let playerLives, computerLives, playerChoice, rand; 
const rockElement =  document.getElementById('rock');
const scissorsElement = document.getElementById('scissors');
const paperElement = document.getElementById('paper');
const roundElement = document.getElementById('gameText');
const nextRoundElement = document.getElementById('nextRound');
const CPUChoiceElement= document.getElementById('CPUChoice');
var computerChoice;
let computerChoices = new Array("Rock", "Paper", "Scissors");
let max = 2
let min = 0

rockElement.addEventListener("click", () => setPlayerChoice("Rock"))
scissorsElement.addEventListener("click", () => setPlayerChoice("Scissors"))
paperElement.addEventListener("click", () => setPlayerChoice("Paper"))

function updateLives(){
    playerLife.innerHTML = playerLives;
    computerLife.innerHTML = computerLives;
}

function startGame() {
    playerLives = 3
    computerLives = 3
    playerLife.innerHTML = playerLives;
    computerLife.innerHTML= computerLives;
    roundElement.innerHTML = 'Start Game';
    CPUChoiceElement.innerHTML = ' ';
}

function setPlayerChoice(choice){
    rand = Math.round(Math.random() * 2);
    computerChoice = computerChoices[rand];
    console.log(rand);
    console.log("computer Choice");
    console.log(computerChoice);
    CPUChoiceElement.innerHTML = computerChoice;
    playerChoice = choice;
    console.log("Player Choice");
    console.log(playerChoice);
    checkWin();
    checkGameOver();
}

function checkWin(){
    if(playerChoice === "Rock" && computerChoice === "Scissors"){
        computerLives -= 1;
        roundElement.innerHTML = 'You Win';
        updateLives()
    }
    else if(playerChoice === "Paper" && computerChoice === "Rock"){
        computerLives -= 1;
        roundElement.innerHTML = 'You Win';
        updateLives()
    }
    else if(playerChoice === "Scissors" && computerChoice == "Paper"){
        computerLives -= 1;
        roundElement.innerHTML = 'You Win';
        updateLives()
    }
    else {
        checkLose()
    }
}

function checkLose(){
    if(computerChoice === "Rock" && playerChoice === "Scissors"){
        playerLives -= 1;
        roundElement.innerHTML = 'You Lose';
        updateLives()
    }
    else if(computerChoice === "Paper" && playerChoice === "Rock"){
        playerLives -= 1;
        roundElement.innerHTML = 'You Lose';
        updateLives()
    }
    else if(computerChoice === "Scissors" && playerChoice === "Paper"){
        playerLives -= 1;
        roundElement.innerHTML = 'You Lose';
        updateLives()
    }
    else {
        checkDraw()
    }
    
}

function checkDraw(){
    if(playerChoice === computerChoice){
        roundElement.innerHTML = 'Draw';
    }
}

function checkGameOver(){
    if(playerLives === 0){
        roundElement.innerText = "You Lose";
        updateLives();
        alert('Game Over');
        startGame();
    }
    else if(computerLives === 0){
        roundElement.innerText = "You Win";
        updateLives();
        alert("You Win");
        startGame();
    }
}

startGame();
