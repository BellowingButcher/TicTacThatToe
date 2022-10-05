let player = 'X';
let gameBoard = ['', '', '', '', '', '', '', '', ''];
function changePlayer() {
    if (player === 'X') {
        player = 'O';
    }    
    else {player = 'X'};
}
// function changeBoardState()
//     - insert player into array
//         - at selected players tile(index)
function changeBoardState(tile){
    gameBoard.splice(tile, 1, `${player}`);
}

changeBoardState(3);
console.log(gameBoard);
changeBoardState(7);
console.log(gameBoard);