let player = 'X';
let gameBoard = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '];
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


function changeBoardState(elementID, currentPlayer){
    // console.log(gameBoard);
    // console.log(elementID);
    // console.log(gameBoard[elementID]);
    if (gameBoard[elementID] === ' '){
        gameBoard.splice(elementID, 1, currentPlayer);
    }
    // else if(gameBoard[elementID].textContent === ''){
    //     gameBoard.splice(elementID, 1, currentPlayer);
    // }
    else (console.log('Element has already been chosen'));
}
// function changeBoardState({ index = ''}){
//     gameBoard.splice(elementID, 1, currentPlayer);
// }

function createDiv(clas, id, parent) {
    let div = document.createElement('div');
    div.setAttribute('id', id);
    div.setAttribute('class', clas);
    parent.appendChild(div);
    return div;
}
function drawBoard(){
    let container1 = createDiv('container', 'mainConatain', body)
    let row1 = createDiv('row', 'row1', container1);
    for(let i=0; i<=8; i++) {
        createDiv('col-4', `${i}`, row1);
        let element = document.getElementById(`${i}`);
        element.textContent = 'EmptyBox';
        element.addEventListener('click', makeAMove);    //run event target through function changeBoardState(event Target)
            //then function changePlayer
    }
}

function drawPage(){
    createDiv('h1', 'title', body)
    document.getElementById('title').textContent = 'Tick Tac That Toe';
    drawBoard();
    
}
function makeAMove(){
    //trying to call for the event target inside of the function
    let target = event.target;
    let id = target.id;
    // console.log(target);
    // let clickCount = 0;
    // clickCount++;
    // console.log(isNaN(id));
    // console.log(player);
    //running into a scoping issue with the parameter player
    changeBoardState(id, player);
    console.log(gameBoard);
    // console.log(player);
    console.log('before IF', player);
    if (gameBoard[id] === ' ' || gameBoard[id] === player){
        changePlayer();
        console.log('afterIF', player)
    }
    console.log('afterElse', player);
}