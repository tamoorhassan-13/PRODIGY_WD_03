// script.js
const cells = document.querySelectorAll(".cell");
const newGameBtn = document.getElementById("newGameBtn");
const resetBtn = document.getElementById("resetBtn");
let currentPlayer = "x";
const board = Array(9).fill(null);

const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function handleClick(event) {
  const index = event.target.dataset.index;
  if (board[index] || checkWinner()) return;

  board[index] = currentPlayer;
  event.target.textContent = currentPlayer;
  event.target.classList.add(currentPlayer);

  if (checkWinner()) {
    alert(`${currentPlayer.toUpperCase()} wins!`);
  } else if (board.every((cell) => cell)) {
    alert("It's a draw!");
  }

  currentPlayer = currentPlayer === "x" ? "o" : "x";
}

function checkWinner() {
  return winningCombinations.some((combination) => {
    const [a, b, c] = combination;
    return board[a] && board[a] === board[b] && board[a] === board[c];
  });
}

function resetGame() {
  board.fill(null);
  cells.forEach((cell) => {
    cell.textContent = "";
    cell.classList.remove("x", "o");
  });
  currentPlayer = "x";
}

function newGame() {
  resetGame();
  // Additional logic for a new game can be added here if needed
}

cells.forEach((cell) => cell.addEventListener("click", handleClick));
newGameBtn.addEventListener("click", newGame);
resetBtn.addEventListener("click", resetGame);
