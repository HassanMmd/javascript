let playerWins = 0;
let computerWins = 0;

function computerPlay() {
    let result;
    let randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0:
            result = "Paper";
            break;
        case 1:
            result = "Rock";
            break;
        case 2:
            result = "Scissors";
            break;
    }
    return result;
}

function playerPlay() {
    let result;
    let inputText = prompt("Please choose :  Rock, Paper, Scissors");
    let lowerInputText = inputText.toLowerCase();
    switch (lowerInputText) {
        case "paper":
            result = "Paper";
            break;
        case "rock":
            result = "Rock";
            break;
        case "scissors":
            result = "Scissors";
            break;
        default:
            result = `ERROR`
            break;
    }
    // if wrong value entered call the function again to get a correct value
    if (result == "ERROR") {
        console.log(`You entered wrong value`)
        return playerPlay();
    }
    else {
        return result;
    }
}

function PlayRound(playerSelection, computerSelection) {
    let result;
    switch (`${playerSelection}${computerSelection}`) {
        case `PaperRock`:
            result = `paper beat rock you win`;
            playerWins++;
            break;
        case `ScissorsRock`:
            result = `Scissors not beat rock you lose`;
            computerWins++;
            break;
        case `PaperScissors`:
            result = `paper not beat Scissor you lose`;
            computerWins++;
            break;
        case `ScissorsPaper`:
            result = `Scissors beat paper you win`;
            playerWins++;
            break;
        case `RockPaper`:
            result = `rock not beat paper you lose`;
            computerWins++;
            break;
        case `RockScissors`:
            result = `rock beat scissors you win`;
            playerWins++;
            break;
        case `PaperPaper`:
            result = `Paper equal paper`;
            break;
        case `RockRock`:
            result = `Rock equal Rock`;
            break;
        case `ScissorsScissors`:
            result = `Scissors equal Scissors`;
            break;
    }
    console.log(result);
    return result;
}

function game() {
    // reset score
    playerWins = 0;
    computerWins = 0

    for (let i = 0; i < 5; i++) {
        playerSelection = playerPlay();
        computerSelection = computerPlay();
        PlayRound(playerSelection, computerSelection);
    }
    if (playerWins == computerWins) {
        return `NO WINNER! The Score : you ${playerWins} - computer ${computerWins}}`;
    }
    if (playerWins > computerWins) {
        return `YOU WIN! The Score : you ${playerWins} - computer ${computerWins}}`;
    }
    else {
        return `YOU LOSE! The Score : you ${playerWins} - computer ${computerWins}}`;
    }
}