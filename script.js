//list of selections for the getComputerChoice function
var selections = ["ROCK", "PAPER", "SCISSORS"];
var playerCount = 0;
var computerCount = 0;

//function that returns a random selection from the selections array
function getComputerChoice(){

    return selections[Math.floor(Math.random() * 3)];
}

//Function that takes the inputs from both players and returns if the player wins or loses
function playRound(playerChoice, computerChoice){
    //prints the choices
    console.log("You: " + playerChoice + " Computer: " + computerChoice)

    //checks who won the game
    if(playerChoice === computerChoice){
        result = "draw";
    }
    else if(playerChoice === "ROCK"){
        if(computerChoice==="PAPER")
            result = "lose";
        if(computerChoice==="SCISSORS")
            result = "win";
    }
    else if (playerChoice === "PAPER"){
        if(computerChoice==="SCISSORS")
            result = "lose";
        if(computerChoice==="ROCK")
            result = "win";
    }
    else if (playerChoice === "SCISSORS"){
        if(computerChoice==="ROCK")
            result = "lose";
        if(computerChoice==="PAPER")
            result = "win";
    }

    //returns the winner and changes the player count
    if(result === "win")
    {
        console.log("You Win!");
        playerCount = playerCount + 1;
    }
    else if(result === "lose")
    {
        console.log("You lose :(");
        computerCount = computerCount +1;
    }
    else if(result === "draw"){
        console.log("Its a draw!");
    }

    //prints the scores
    console.log("Score: Player: " + playerCount + " Computer: " + computerCount);

}   
//Main game function
function game(){

        console.log("Enter rock paper or scissors to start the game :)")

        //Creates a loop until the player or computer gets to 3 points
        while(playerCount < 3 && computerCount < 3)
        {
            //plays a round with the computer choice function and the input from the user
            playRound(prompt("What is your selection").toUpperCase(), getComputerChoice());
        }

        //responds based on who wins
        if(playerCount === 3){
            console.log("CONGRATS YOU WON!!")
        }
        else
        {
            console.log("you lost lol hahah")
        }

        //prompt for if you would like to go again
        if(prompt("Would you like to go again?").toUpperCase()==="YES")
        {
            playerCount = 0
            computerCount = 0
            game()
        }
        
}

game()

