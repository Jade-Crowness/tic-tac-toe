const gameCell = document.querySelectorAll('.gameCell')

const gameBoard = (() => {

    const playerX = "X";
    const playerO = "O";

    let currentPlayer = playerX;

    const getPlayerX = () => playerX;
    const getPlayerO = () => playerO;

    const getCurrentPlayer = () => currentPlayer;

    const winningConditions = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [1, 5, 8], [2, 5, 6]];

    const changePlayer = function() {
        if (currentPlayer === playerX) {
            currentPlayer = playerO;
        } else {
            currentPlayer = playerX;
        }
    }

    const showWinningConditions = () => winningConditions;

    return {getPlayerX, getPlayerO, getCurrentPlayer, changePlayer, showWinningConditions};

})();

gameCell.forEach(function(cell) {
    cell.addEventListener('click', function() {
        if (cell.textContent != "" || meow == true) {
        return;
        };

        cell.textContent = gameBoard.getCurrentPlayer();
        gameBoard.changePlayer();
    })
})

