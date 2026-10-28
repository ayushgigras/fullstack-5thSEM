const screen = document.getElementById("screen");
const button = document.getElementById("action-button");
const result = document.getElementById("result");
const bestDisplay = document.getElementById("best");

let timer;
let startTime;
let ready = false;

function play() {
    if (!startTime && !ready) {
        startTime = "waiting";
        screen.textContent = "Wait for green...";
        button.textContent = "Wait...";

        timer = setTimeout(() => {
            ready = true;
            startTime = Date.now();
            screen.classList.add("ready");
            screen.textContent = "Click!";
            button.textContent = "Click!";
        }, Math.random() * 3000 + 2000);

        return;
    }

    if (!ready) {
        clearTimeout(timer);
        startTime = null;
        screen.textContent = "Too early! Click to try again";
        button.textContent = "Start";
        return;
    }

    const time = Date.now() - startTime;
    const oldBest = Number(localStorage.getItem("bestReactionTime")) || Infinity;
    const best = Math.min(time, oldBest);

    localStorage.setItem("bestReactionTime", best);
    result.textContent = `Your time: ${time} ms`;
    bestDisplay.textContent = `Best: ${best} ms`;
    screen.classList.remove("ready");
    screen.textContent = "Click to try again";
    button.textContent = "Try again";
    ready = false;
    startTime = null;
}

const savedBest = localStorage.getItem("bestReactionTime");
if (savedBest) {
    bestDisplay.textContent = `Best: ${savedBest} ms`;
}

screen.addEventListener("click", play);
button.addEventListener("click", play);
document.addEventListener("keydown", (event) => {
    if (event.code === "Space" || event.code === "Enter") {
        event.preventDefault();
        play();
    }
});
