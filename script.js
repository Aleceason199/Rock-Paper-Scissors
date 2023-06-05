//list of selections for the getComputerChoice function
var selections = ["ROCK", "PAPER", "SCISSORS"];
var playerCount = 0;
var computerCount = 0;
var result;

//getting the score
const playerCounter = document.querySelector("#playerScore");
const computerCounter = document.querySelector("#computerScore");

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



//function that returns a random selection from the selections array
function getComputerChoice(){

    return selections[Math.floor(Math.random() * 3)];
}

//Function that takes the inputs from both players and returns if the player wins or loses
function playRound(playerChoice, computerChoice){
    //prints the choices
    choiceMessage.innerHTML = ("YOU CHOSE: " + playerChoice + "<br>COMPUTER CHOSE: " + computerChoice)

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

    //responds based on who wins
    if(playerCount === 3){
        console.log("CONGRATS YOU WON!!")
    }
    else if(computerCount === 3)
    {
        console.log("you lost lol hahah")
    }

}   


