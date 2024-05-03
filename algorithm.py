def is_valid(board, row, col, num):
    # Check if the number is already in th current row
    for i in range(9):
        if board[row][i] == num:
            return False
        
    # Check if the number is already in the current column
    for i in range(9):
        if board[i][col] == num:
            return False
    
    # Check if the number is already in the current 3x3 grid
    start_row = row - row % 3
    start_col = col - col % 3
    for i in range(3):
        for j in range(3):
            if board[i + start_row][j + start_col] == num:
                return False
    
    return True 

def find_empty_location(board):
    for i in range(9):
        for j in range(9):
            if board[i][j] == 0:
                return (i, j)
            
    return None

def solve_sudoku(board):
    # Find an empty location
    empty_loc = find_empty_location(board)
    if not empty_loc:
        return True # Puzzle solved
    
    row, col = empty_loc

    # Try placing numbers 1 through 9
    for num in range(1, 10):
        if is_valid(board, row, col, num):
            # If the number is valid, place it in the board
            board[row][col] = num

            # Try solving the puzzle recursively
            if solve_sudoku(board):
                return True # Puzzle solved
            
            # If the puzzle cannot be solved with this number, backtrack

            board[row][col] = 0

    return False # No solution found

# Example Sudoku board (0 represents empty cells)
sudoku_board = [
    [5, 3, 0, 0, 7, 0, 0, 0, 0],
    [6, 0, 0, 1, 9, 5, 0, 0, 0],
    [0, 9, 8, 0, 0, 0, 0, 6, 0],
    [8, 0, 0, 0, 6, 0, 0, 0, 3],
    [4, 0, 0, 8, 0, 3, 0, 0, 1],
    [7, 0, 0, 0, 2, 0, 0, 0, 6],
    [0, 6, 0, 0, 0, 0, 2, 8, 0],
    [0, 0, 0, 4, 1, 9, 0, 0, 5],
    [0, 0, 0, 0, 8, 0, 0, 7, 9]
]

if solve_sudoku(sudoku_board):
    print("Sudoku Solved Successfully: ")
    for row in sudoku_board:
        print(row)
else:
    print('No solution exists.')