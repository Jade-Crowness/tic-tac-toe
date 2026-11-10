const gameCells = document.querySelectorAll('.gameCell');

const gameBoard = (function() {

    const playerX = "X";
    const playerO = "O";

    let currentPlayer = playerX;

    let gameOver = false;

    let cells = ["", "", "", "", "", "", "", "", ""];
    const winningConditions = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];

    function checkWinner() {
        for (let winCondition of winningConditions) {
            const a = cells[winCondition[0]];
            const b = cells[winCondition[1]];
            const c = cells[winCondition[2]];

            if (a == b && b == c && a != "") {
                console.log(`${a} won!`);
                gameOver = true;
                return;
            }
        }
    }

    function cellClicked() {
        if (this.textContent != "" || gameOver == true) return;
        this.textContent = currentPlayer;
        const cellIndex = parseInt(this.getAttribute('cell-index'));
        cells[cellIndex] = currentPlayer;
        currentPlayer = (currentPlayer == playerX) ? playerO : playerX;

        checkWinner();
    }

    return {cellClicked};

})();

gameCells.forEach(function(cell) {
    cell.addEventListener('click', gameBoard.cellClicked);
})