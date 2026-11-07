const gameCell = document.querySelectorAll('.gameCell')

const gameBoard = (() => {

    const playerX = "X";
    const playerO = "0";

    const getPlayerX = () => playerX;
    const getPlayerO = () => playerO;

    const getCurrentPlayer = () => currentPlayer;

    return {getPlayerX, getPlayerO, getCurrentPlayer};

})();

const players = {
    playerX: gameBoard.getPlayerX(),
    playerO: gameBoard.getPlayerO(),
    currentPlayer: gameBoard.getPlayerX(),
}

const changePlayer = function() {
    if (players.currentPlayer === "X") {
        players.currentPlayer = "O"
    } else {
        players.currentPlayer = "X"
    }
};

gameCell.forEach(function(cell) {

    cell.addEventListener('click', function() {
        if (cell.textContent != "") {
        return;
        };
        cell.textContent = players.currentPlayer;
        changePlayer();
    })
})