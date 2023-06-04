var selections = ["rock", "paper", "scissors"]

function getComputerChoice(){

    return selections[Math.floor(Math.random() * 3)];
}

function playRound(playerChoice, computerChoice){
    if(playerChoice===computerChoice)
        return "0";
    if (playerChoice === "rock")
        if(computerChoice==="paper")
            return "lose"
        if(computerChoice==="scissors")
            return "win"
    if (playerChoice === "paper")
        if(computerChoice==="scissors")
            return "lose"
        if(computerChoice==="rock")
            return "win"
    if (playerChoice === "scissors")
        if(computerChoice==="rock")
            return "lose"
        if(computerChoice==="paper")
            return "win"
}
