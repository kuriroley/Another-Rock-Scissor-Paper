const cardButtons = document.querySelectorAll('button');
const selectLog = document.querySelector('span');
const pScore = document.querySelector('.pScore');
const cScore = document.querySelector('.cScore');
const gRounds = document.querySelector('.gRounds');

cardButtons.forEach((button)=>{
    
    let playerAnswer;
    
    button.addEventListener('click', e=>{
        playerAnswer = e.target.value;

        roundTracker(gameLogic(playerAnswer,getComputerChoice()));
        

    })
})

function getComputerChoice(){
    let choices = ['rock','scissor','paper'];
    //using math floor for getting a random value from array
    let choice = choices[Math.floor(choices.length * Math.random())];
    return choice
}
    let playerScore = 0;
    let computerScore = 0;
    let gameRounds = 1;

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
        computerScore++;
        cScore.textContent = `Computer score: ${computerScore}`;
        return selectLog.textContent = `Computer's ${computer} beat player's ${player}! Try again!`;        
    }
}

function roundTracker(game){
    
    for(let i = gameRounds; i <= 5; i++){
        if(i!=5){
            game;
            gRounds.textContent = `Game rounds: ${gameRounds++}`
        } else{
            gRounds.textContent = 'Game over!'
        }
    }
}

// for (let i = 1; i<=5; i++){
//     gameLogic(getPlayerChoice(),getComputerChoice());
// }

