function getComputerChoice(){
    let choices = ['rock','scissor','paper'];
    let choice = choices[Math.floor(choices.length * Math.random())];
   
    // if(choice === 'rock'){
    //     choice = 'rock';
        
    // }
    // if(choice === 'scissor'){
    //     choice = 'scissor';
        
    // }
    // if(choice === 'paper'){
    //     choice = 'paper';
        
    // }
    return choice
}
getComputerChoice()

let cpu = getComputerChoice();
console.log(cpu)