// 5. Memory Card Match
// A 4x4 grid of face-down cards with 8 pairs, flipped two at a time.
// Matches stay open, and mismatches flip back after 1 second.
// Practice: array shuffle, nested state with let, closures for the "first card" tracking, 
// and locking clicks while cards flip back.

let firstCard = null;
let secondCard = null;
let lockBoard = false;

