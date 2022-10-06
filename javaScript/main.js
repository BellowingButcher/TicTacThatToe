let player = 'X';
let gameBoard = ['', '', '', '', '', '', '', '', ''];
let body = document.getElementById('app');
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

function createDiv(clas, id, parent) {
    let div = document.createElement('div');
    div.setAttribute('id', id);
    div.setAttribute('class', clas);
    parent.appendChild(div);
    return div;
}
function drawBoard(){
    let row1 = createDiv('row', 'row1', body)
    for(let i=0; i<=8; i++) {
        createDiv('col-4', `col${i}`, row1);
        document.getElementById(`col${i}`).textContent = 'EmptyBox';
    }
}

function drawPage(){
    createDiv('h1', 'title', body)
    document.getElementById('title').textContent = 'Tick Tac That Toe';
    drawBoard();

}