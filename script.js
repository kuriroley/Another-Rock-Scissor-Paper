const cardButtons = document.querySelectorAll('buttons');




function getComputerChoice(){
    let choices = ['rock','scissor','paper'];
    //using math floor for getting a random value from array
    let choice = choices[Math.floor(choices.length * Math.random())];
    return choice
}


function getPlayerChoice(choice){
    let playerAnswer = prompt();
     return playerAnswer.toLowerCase();

}

function gameLogic(player,computer){
    let gameCount = 0;
    let playerScore = 0;
    let computerScore = 0;
        if(player === 'rock' && computer === 'scissor'){
            playerScore++;
            gameCount++;
            return console.log(`player's rock beat computer's scissor`);
            
        } else if( player === 'scissor' && computer === 'paper'){
            playerScore++;
            gameCount++;
            return console.log(`player's scissor beat computer's paper`)
            
        } else if( player === 'paper' && computer === 'rock'){
            playerScore++;
            gameCount++;
            return console.log(`player's paper beat computer's rock`)
            
        } else{
            computerScore++;
            gameCount++;
            return console.log(`Computer's ${computer} beat player's ${player}!`);
            
        }
}

// for (let i = 1; i<=5; i++){
//     gameLogic(getPlayerChoice(),getComputerChoice());
// }

