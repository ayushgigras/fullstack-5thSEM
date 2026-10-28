// Rock Paper Scissors Game

function playGame(playerChoice) {
    var computerChoice = choices[Math.floor(Math.random() * choices.length)];
    var result = document.getElementById("result");

    if (playerChoice === computerChoice) {
        result.innerHTML = "It's a tie!";
    } else if (
        (playerChoice === "Rock" && computerChoice === "Scissors") ||
        (playerChoice === "Paper" && computerChoice === "Rock") ||
        (playerChoice === "Scissors" && computerChoice === "Paper")
    ) {
        result.innerHTML = "You win!";
    } else {
        result.innerHTML = "Computer wins!";
    }
}

var choices = ["Rock", "Paper", "Scissors"];
