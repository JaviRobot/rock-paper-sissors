let randomNumber = 0
let computerSelection = "";
let mySelection = "";
let scoreComputer = 0;
let scorePlayer = 0;

function getComputerChoise(){
    randomNumber = Math.floor(Math.random()*3)+1;
   if(randomNumber === 1){
    computerSelection = "piedra";
   }else if(randomNumber === 2){
    computerSelection = "papel";
   }else{
    computerSelection = "tijera"
   }
}



function playRound(mySelection,computerSelection){
    mySelection = prompt("Your choice")
if(computerSelection == "piedra"){
    
    if(mySelection == "papel"){
    alert("Ganaste! papel le gana a piedra");
    return scorePlayer++ 
    }else if(mySelection == "tijera"){
     alert("Perdiste! tijera pierde contra piedra");
     return scoreComputer++
    }else if(mySelection == "piedra"){
        alert("Empate!")
    }
} else if(computerSelection == "papel"){

    if(mySelection == "papel"){
     alert("Empate"); 
    }else if(mySelection == "tijera"){
     alert("Ganaste tijera gana contra papel");
     scorePlayer++
    }else if(mySelection == "piedra"){
        alert("Perdiste piedra pierde contra papel")
        return scoreComputer++
    }
}else{
    if(mySelection == "papel"){
     alert("Perdiste papel pierde contra tijera"); 
     return scoreComputer++
    }else if(mySelection == "tijera"){
    alert("Empate");
    }else if(mySelection == "piedra"){
        alert("Ganaste! piedra le gana a tijera")
        return scorePlayer++
    }
}
}

function game(){
    for(i= 1; i <= 5; i++){
        getComputerChoise();
        playRound(mySelection,computerSelection);
    }
    alert(`Final Score! Player: ${scorePlayer} Computer: ${scoreComputer}`);
    if(scoreComputer < scorePlayer){
        alert("FELICIDADES HAS GANADO!")
    }else if(scoreComputer === scorePlayer){
        alert("FUE UN EMPATE!")
    }else{
        alert("GAME OVER!")
    }
    
}

game()







