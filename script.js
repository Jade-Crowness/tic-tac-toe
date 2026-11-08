const gameCell = document.querySelectorAll('.gameCell')

const gameBoard = (() => {

    const playerX = "X";
    const playerO = "O";

    let currentPlayer = playerX;

    const getPlayerX = () => playerX;
    const getPlayerO = () => playerO;

    const getCurrentPlayer = () => currentPlayer;

    const changePlayer = function() {
        if (currentPlayer === playerX) {
            currentPlayer = playerO;
        } else {
            currentPlayer = playerX;
        }
    }

    return {getPlayerX, getPlayerO, getCurrentPlayer, changePlayer};

})();

gameCell.forEach(function(cell) {
    cell.addEventListener('click', function() {
        if (cell.textContent != "") {
        return;
        };

        cell.textContent = gameBoard.getCurrentPlayer();
        gameBoard.changePlayer();
    })
})