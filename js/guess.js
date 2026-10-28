let number = Math.floor(Math.random() * 100) + 1;
let chances = 7;

function guessNumber() {
    let guess = Number(document.getElementById("guessInput").value);
    let result = document.getElementById("result");

    if (guess === number) {
        result.innerHTML = "Correct! You guessed the number.";
        return;
    }

    chances--;

    if (guess < number) {
        result.innerHTML = "Too low!";
    } else {
        result.innerHTML = "Too high!";
    }

    document.getElementById("chance").innerHTML =
        "Chances left: " + chances;

    if (chances === 0) {
        result.innerHTML = "Game over! The number was " + number;
        document.getElementById("guessButton").disabled = true;
    }
}

document.getElementById("guessButton").onclick = guessNumber;