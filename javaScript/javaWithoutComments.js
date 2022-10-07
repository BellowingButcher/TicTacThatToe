let player = 'X';
let gameBoard = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '];
let clickCount = 0
let body = document.getElementById('app');
body.setAttribute('class', 'vh-100');
document.addEventListener('DOMContentLoaded', () => {
    drawPage();
})

function changePlayer() {
    if (player === 'X') {
        player = 'O';
    }    
    else {player = 'X'};
}
function changeBoardState(elementID, currentPlayer){
    if (gameBoard[elementID] === ' '){
        gameBoard.splice(elementID, 1, currentPlayer);
    }
}
function createDiv(clas, id, parent) {
    let div = document.createElement('div');
    div.setAttribute('id', id);
    div.setAttribute('class', clas);
    parent.appendChild(div);
    return div;
}
function drawBoard(){
    let container1 = createDiv('container text-center bg-secondary h-75', 'mainContain', body)
    let row1 = createDiv('row h-50', 'row1', container1);
    for(let i=0; i<=8; i++) {
        createDiv('col-4 shadow', `${i}`, row1);
        let element = document.getElementById(`${i}`);
        element.textContent = '';
        element.addEventListener('click', makeAMove, { once: true });
    }
}
function resetBoard () {
    gameBoard = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '];
    let results = document.getElementById('results')
    if (results !== null){
        results.remove();
    }
    player = 'X';
    clickCount = 0;
    for(let i=0; i<=8; i++) {
        let element = document.getElementById(`${i}`);
        element.textContent = ' ';
        element.addEventListener('click', makeAMove, { once: true });
    }
}
function createButton(){
    let cont = document.getElementById('mainContain')
    let row = createDiv('row', 'btnRow', cont);
    createDiv('col', 'btnCol', row);
    let button = document.createElement('button');
    row.appendChild(button);
    button.textContent = 'ResetGame';
    button.setAttribute('class', 'btn btn-lg w-50 shadow')
    button.addEventListener('click', resetBoard);
}
function drawPage(){
    createDiv('h1 text-center', 'title', body);
    createDiv('p text-center', 'whosTurn', body);
    document.getElementById('title').textContent = 'Tick Tac That Toe';
    document.getElementById('whosTurn').textContent = 'Player X goes first';
    drawBoard();
    createButton();
}
function makeAMove(){
    let target = event.target;
    let id = target.id;
    let resultElement = document.getElementById('mainContain');
    clickCount++;
    if (gameBoard[id] === ' '){
        changeBoardState(id, player);
        target.textContent = player;
        if (declareWinner() === true) {
            createDiv('row', 'results', resultElement);
            document.getElementById('results').textContent = player + ' is the winner!';
            for(let i=0; i<=8; i++) {
                let element = document.getElementById(`${i}`);
                element.removeEventListener('click', makeAMove);
            }
            return;
        }
        if (clickCount >= 9) {
            createDiv('row', 'results', resultElement);
            document.getElementById('results').textContent = 'You have Tic Tacked That Toe enough... It"s a tie';
            removeEventListener();
            return;
        }
        changePlayer();
    }

}
function declareWinner(){
    for(i of gameBoard) {
        if (gameBoard[0] === 'X' && gameBoard[1] === 'X' && gameBoard[2] === 'X'){
            console.log('you got a winner');
            return true
        }
        if (gameBoard[3] === 'X' && gameBoard[4] === 'X' && gameBoard[5] === 'X'){
            console.log('you got a winner');
            return true
        }
        if (gameBoard[6] === 'X' && gameBoard[7] === 'X' && gameBoard[8] === 'X'){
            console.log('you got a winner');
            return true
        }
        if (gameBoard[0] === 'X' && gameBoard[3] === 'X' && gameBoard[6] === 'X'){
            console.log('you got a winner');
            return true
        }
        if (gameBoard[1] === 'X' && gameBoard[4] === 'X' && gameBoard[7] === 'X'){
            console.log('you got a winner');
            return true
        }
        if (gameBoard[2] === 'X' && gameBoard[5] === 'X' && gameBoard[8] === 'X'){
            console.log('you got a winner');
            return true
        }
        if (gameBoard[0] === 'X' && gameBoard[4] === 'X' && gameBoard[8] === 'X'){
            console.log('you got a winner');
            return true
        }
        if (gameBoard[2] === 'X' && gameBoard[4] === 'X' && gameBoard[6] === 'X'){
            console.log('you got a winner');
            return true
        }
        if (gameBoard[0] === 'O' && gameBoard[1] === 'O' && gameBoard[2] === 'O'){
            console.log('you got a winner');
            return true
        }
        if (gameBoard[3] === 'O' && gameBoard[4] === 'O' && gameBoard[5] === 'O'){
            console.log('you got a winner');
            return true
        }
        if (gameBoard[6] === 'O' && gameBoard[7] === 'O' && gameBoard[8] === 'O'){
            console.log('you got a winner');
            return true
        }
        if (gameBoard[0] === 'O' && gameBoard[3] === 'O' && gameBoard[6] === 'O'){
            console.log('you got a winner');
            return true
        }
        if (gameBoard[1] === 'O' && gameBoard[4] === 'O' && gameBoard[7] === 'O'){
            console.log('you got a winner');
            return true
        }
        if (gameBoard[2] === 'O' && gameBoard[5] === 'O' && gameBoard[8] === 'O'){
            console.log('you got a winner');
            return true
        }
        if (gameBoard[0] === 'O' && gameBoard[4] === 'O' && gameBoard[8] === 'O'){
            console.log('you got a winner');
            return true
        }
        if (gameBoard[2] === 'O' && gameBoard[4] === 'O' && gameBoard[6] === 'O'){
            console.log('you got a winner');
            return true
        }
        else {return false}

    }
}
