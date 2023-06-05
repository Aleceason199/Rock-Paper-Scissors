//list of selections for the getComputerChoice function
var selections = ["ROCK", "SCISSORS", "PAPER"];
var selections_ = ["PAPER", "ROCK", "SCISSORS", "PAPER", "ROCK"]

var playerCount = 0;
var computerCount = 0;
var result;

//gets the game div
const gameDiv = document.querySelector("#gameDiv");

//getting the score
const playerCounter = document.querySelector("#playerScore");
const computerCounter = document.querySelector("#computerScore");

//gets message elements
const choiceMessage = document.querySelector("#choiceMessage")
const winMessage = document.querySelector("#winMessage")

//Gets the buttons from the choices category
const choiceButtons = document.querySelector("#choices")
const gameButtons = choiceButtons.querySelectorAll("button")

//for loop for each of the buttons and adds event listeners to them which trigger playRound()
gameButtons.forEach((button) => {

    button.addEventListener('click', () => {
        playRound(button.id, getComputerChoice());
    });
 });

 //creates a go again button to be added once the game is over
const messageDiv = document.querySelector("#messageBox");

const againButton = document.createElement('button');
againButton.innerHTML = "GO AGAIN?"
againButton.id = "againButton"
againButton.addEventListener('click', () => {goAgain()});






//function that returns a random selection from the selections array
function getComputerChoice(){

    return selections[Math.floor(Math.random() * 3)];
}

//Function that takes the inputs from both players and returns if the player wins or loses
function playRound(playerChoice, computerChoice){

    //shows the messages on page
    choiceMessage.innerHTML = ("YOU CHOSE: " + playerChoice + "<br>COMPUTER CHOSE: " + computerChoice)

    //gets the players selections index and adds 1 to match it to the selections_ array
    playerIndex = selections.indexOf(playerChoice) + 1;

    //checks if the selection is above or below the computers selection in the selections array_
    //returns the result of the play
    if (selections_[playerIndex+1] === computerChoice){
        result = "win"
    }
    else if(selections_[playerIndex-1] === computerChoice){
        result = "lose"
    }
    else{
        result = "draw"
    }

    //returns the winner and changes the player count
    if(result === "win")
    {
        winMessage.innerHTML = "YOU WON THE ROUND!"
        playerCount = playerCount + 1;
    }
    else if(result === "lose")
    {
        winMessage.innerHTML = "You lost that round :("
        computerCount = computerCount +1;
    }
    else if(result === "draw"){
        winMessage.innerHTML = "its a draw :|"
    }

    //prints the scores
    playerCounter.innerHTML = playerCount;
    computerCounter.innerHTML = computerCount;

    //calls the game end function
    if(playerCount === 3){
        gameEnd("player")
    }
    else if(computerCount === 3)
    {
        gameEnd("computer")
    }
}

//function to be called when the game ends takes a winner variable
function gameEnd(winner){

    //disables the game buttons
    gameButtons.forEach((button) => {
        button.disabled = true;
    });
    
    // depending on the inputed winner displays a message
    if(winner==="player"){
        winMessage.innerHTML = "YOU WON THE GAME!<br>WOULD YOU LIKE TO GO AGAIN?"
    }
    else{
        winMessage.innerHTML = "YOU LOST THE GAME!<br>WOULD YOU LIKE TO GO AGAIN?"
    }

    //creates a temporary go again button
    tempButton = messageDiv.appendChild(againButton);

}
//function to be called when the go again button is clicked
function goAgain(){

    //enables the game buttons again
    gameButtons.forEach((button) => {
        button.disabled = false;
    });

    //resets all the elements on the page back to the orignal values
    tempButton.remove()
    winMessage.innerHTML = ""
    choiceMessage.innerHTML = ""
    playerCount = 0
    computerCount = 0
    playerCounter.innerHTML = playerCount;
    computerCounter.innerHTML = computerCount;
}

