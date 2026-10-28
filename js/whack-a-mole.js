let score = 0;
let timeLeft = 30;
const grid = document.querySelector('.grid');

// Show the mole in a random cell.
const moleTimer = setInterval(() => {
    const cells = document.querySelectorAll('.cell');
    const cell = cells[Math.floor(Math.random() * cells.length)];

    cell.classList.toggle('active', true);
    setTimeout(() => cell.classList.toggle('active', false), 800);
}, 800);

// Count down the game time.
const gameTimer = setInterval(() => {
    timeLeft--;

    if (timeLeft === 0) {
        clearInterval(gameTimer);
        clearInterval(moleTimer);
        alert(`Game over! Your score is ${score}`);
    }
}, 1000);

// Score a point when the active cell is clicked.
grid.addEventListener('click', (event) => {
    if (event.target.classList.contains('active')) {
        score++;
        event.target.classList.toggle('active', false);
    }
});

let scoreDisplay = document.getElementById('score');
setInterval(() => {
    scoreDisplay.textContent = `Score: ${score}`;
}, 100);

let timeDisplay = document.getElementById('time-left');
setInterval(() => {
    timeDisplay.textContent = timeLeft;
}, 1000);
