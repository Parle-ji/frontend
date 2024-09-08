const boxes = document.querySelectorAll('.box');
const gameInfo = document.querySelector('[data-user]');
const newGameBtn = document.querySelector('.btn');

let currentPlayer;
let gameGrid;

const winingPattern = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function initGame() {
    boxes.forEach((box, index) => {
        box.innerHTML = " "; // Reset box content
        boxes[index].style.pointerEvents = 'all'; // Enable clicks on boxes
        boxes[index].classList.remove('win'); // Remove win class if present
    });

    currentPlayer = 'x'; // Initialize first player
    gameGrid = ['', '', '', '', '', '', '', '', '']; // Initialize game grid
    newGameBtn.classList.remove('active'); // Hide new game button
    gameInfo.innerHTML = `current player's - ${currentPlayer}`; // Update game info with current player
}
initGame();

boxes.forEach((box, index) => {
    box.addEventListener('click', () => {
        handleClick(index); // Attach click event listener to each box
    });
});

function handleClick(index) {
    if (gameGrid[index] === '') { // Fixed comparison to check if the grid is empty
        boxes[index].innerHTML = currentPlayer; // Show current player's move
        boxes[index].style.pointerEvents = 'none'; // Disable further clicks on the box
        gameGrid[index] = currentPlayer; // Update the game grid with the current move
        swapTurn(); // Change the turn
        checkWiner(); // Check if there's a winner
    }
}

function swapTurn() {
    currentPlayer = currentPlayer === 'x' ? 'O' : 'x'; // Swap player
    gameInfo.innerHTML = `current player's - ${currentPlayer}`; // Update the UI with current player
}

function checkWiner() {
    let answer = '';
    winingPattern.forEach((position) => {
        if ((gameGrid[position[0]] !== '') && 
            (gameGrid[position[0]] === gameGrid[position[1]]) && 
            (gameGrid[position[1]] === gameGrid[position[2]])) {
           
            answer = gameGrid[position[0]]; // Determine the winner ('X' or 'O')

            boxes[position[0]].classList.add('win');
            boxes[position[1]].classList.add('win');
            boxes[position[2]].classList.add('win');
            
            gameInfo.innerHTML = `Winner is ${answer}!`; // Update game info with the winner
            boxes.forEach(box => box.style.pointerEvents = 'none'); // Disable further moves
            newGameBtn.classList.add('active'); // Show new game button
        }
    });

    if (answer === '' && !gameGrid.includes('')) {
        gameInfo.innerHTML = 'It\'s a draw!'; // Handle draw case
        newGameBtn.classList.add('active'); // Show new game button
    }
}

newGameBtn.addEventListener('click', initGame); // Attach click event listener to new game button
