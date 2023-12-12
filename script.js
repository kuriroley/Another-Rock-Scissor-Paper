const cardButtons = document.querySelectorAll('button');
const selectLog = document.querySelector('span');
const pScore = document.querySelector('.pScore');
const cScore = document.querySelector('.cScore');

cardButtons.forEach((button)=>{
    let playerAnswer;
    
    button.addEventListener('click', e=>{
        playerAnswer = e.target.value;
        gameLogic(playerAnswer,getComputerChoice());

    })
})

function getComputerChoice(){
    let choices = ['rock','scissor','paper'];
    //using math floor for getting a random value from array
    let choice = choices[Math.floor(choices.length * Math.random())];
    return choice
}
let gameRounds = 0;
let playerScore = 0;
let computerScore = 0;
function gameLogic(player,computer){
    if(player === 'rock' && computer === 'scissor'){
        playerScore++;
        pScore.textContent = `Player score: ${playerScore}`;
        return selectLog.textContent = `Player's rock beat computer's scissor!`        
    } else if( player === 'scissor' && computer === 'paper'){
        playerScore++;
        pScore.textContent = `Player score: ${playerScore}`;
        return selectLog.textContent = `Player's scissor beat computer's paper`
    } else if( player === 'paper' && computer === 'rock'){
        playerScore++;
        pScore.textContent = `Player score: ${playerScore}`;
        return selectLog.textContent = `Player's paper beat computer's rock`
    }  else if (player === computer){
        return selectLog.textContent = `Player's ${player} and Computer's ${computer} are the same!`;        
    } else{
        cScore.textContent = `Computer score: ${computerScore}`;
        return selectLog.textContent = `Computer's ${computer} beat player's ${player}! Try again!`;        
    }
        
}

// for (let i = 1; i<=5; i++){
//     gameLogic(getPlayerChoice(),getComputerChoice());
// }

