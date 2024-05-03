// Sudoku puzzle data (0 represents empty cells)
let puzzle = [
    [5, 3, 0, 0, 7, 0, 0, 0, 0],
    [6, 0, 0, 1, 9, 5, 0, 0, 0],
    [0, 9, 8, 0, 0, 0, 0, 6, 0],
    [8, 0, 0, 0, 6, 0, 0, 0, 3],
    [4, 0, 0, 8, 0, 3, 0, 0, 1],
    [7, 0, 0, 0, 2, 0, 0, 0, 6],
    [0, 6, 0, 0, 0, 0, 2, 8, 0],
    [0, 0, 0, 4, 1, 9, 0, 0, 5],
    [0, 0, 0, 0, 8, 0, 0, 7, 9]
];

// function to generate the Sudoku board
function generateBoard() {
    const board = document.getElementById('sudoku-board');

    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            cell.classList.add(`cell-${Math.floor(i / 3)}-${Math.floor(j / 3)}`); // Add subgrid class
            cell.textContent = puzzle[i][j] === 0 ? '' : puzzle[i][j];
            board.appendChild(cell);
        }
    }
}

// function to solve the sudoku puzzle
function solveSudoku() {
    // Your sudoku solving algorithm goes here
    // this is where you can integrate machine learning to solve the puzzle 
    // for now, we'll keep it simple and just display the solved puzzle
    alert('Sudoku solved! (Not really, but you get the idea)');
}

// Event listener for the solve button
document.getElementById('solve-btn').addEventListener('click', solveSudoku);

// Generate the sudoku board when the page loads
window.addEventListener('load', generateBoard);

// Function to handle cell click
function selectCell(cell) {
    // Remove 'selected' class from previously selected cell
    const selectedCell = document.querySelector('.selected');
    if (selectedCell) {
        selectedCell.classList.remove('selected');
    }

    // Add 'selected' class to the clicked cell
    cell.classList.add('selected');
}

// Function to handle user input in sudoku cells
function handleInput(cell, value) {
    // Remove 'invalid' class from cell
    cell.classList.remove('invalid');
    
    // Check if input value is valid (1-9)
    if (!/^[1-9]$/.test(value)) {
        // If not valid, add 'invalid' class to cell and return
        cell.classList.add('invalid');
        return;
    }

    // Update cell value
    cell.textContent = value;
}

// Function to clear all the user inputs and reset puzzle
function clearBoard() {
    // Remove 'selected' class from any selected cell
    const selectedCell = document.querySelector('.selected');
    if (selectedCell) {
        selectedCell.classList.remove('selected');
    }

    // Clear all cell values
    const cells = document.querySelectorAll('.cell');
    cells.forEach(cell => {
        cell.textContent = '';
        cell.classList.remove('invalid');
    });
}

// Event listeners for cell click and input handling
document.getElementById('sudoku-board').addEventListener('click', function(event) {
    if (event.target.classList.contains('cell')) {
        selectCell(event.target);
    }
});

document.getElementById('sudoku-board').addEventListener('input', function(event) {
    if (event.target.classList.contains('cell')) {
        handleInput(event.target, event.data);
    }
});

// Event listener for the Clear button
document.getElementById('clear-btn').addEventListener('click', clearBoard);
