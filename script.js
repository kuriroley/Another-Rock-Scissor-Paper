const cardButtons = document.querySelectorAll('button');
const selectLog = document.querySelector('span');
const pScore = document.querySelector('.pScore');
const cScore = document.querySelector('.cScore');
const gRounds = document.querySelector('.gRounds');
const gContainer = document.querySelector('.game-container');

cardButtons.forEach((button)=>{
    let playerAnswer;
    button.addEventListener('click', e=>{
        playerAnswer = e.target.value;
        if(gameRounds <= 5){
            gameLogic(playerAnswer,getComputerChoice())
            gRounds.textContent = `Game rounds: ${gameRounds++}`;
        } else{
            if(playerScore > computerScore){
                gRounds.textContent = 'Game over! Player is the winner';
            } else if(computerScore > playerScore){
                gRounds.textContent = 'Game over! Computer is the winner';
            } else if(playerScore === computerScore){
                gRounds.textContent = `It's a tie, no winners! Try again?`
            }
            gRounds.style.cssText = 'font-size:40px';
            const reset = document.createElement('button');
            reset.classList.add('refresh-button');
            gContainer.textContent = ''
            gContainer.appendChild(reset);
            reset.textContent = 'Reset the game?'
            reset.addEventListener('click', ()=>{
                document.location.reload();
            })
            
        }
        
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
