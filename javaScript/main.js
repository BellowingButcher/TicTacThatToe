//global variable for whose turn it is
let player = 'X';
//the gameBoard that I am manipulating
let gameBoard = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '];
//This is for use in declaring a draw
let clickCount = 0
//Declares body variable to attach elements to
let body = document.getElementById('app');
//Sets class attribute 
body.setAttribute('class', 'vh-100');
//Adding an event listener so when page is loaded
document.addEventListener('DOMContentLoaded', () => {
    //It will run my draw page function
    drawPage();
})

//===========================================================================================================================================================================
function changePlayer() {
    //If player(refer back to global variable player) is equal to X
    if (player === 'X') {
        //Set player equal to zero
        player = 'O';
    }    
    //Else player equals X
    else {player = 'X'};
}
//===========================================================================================================================================================================
// function changeBoardState()
//     - insert player into array
//         - at selected players tile(index)

//This will change the state of the  gameBoard using two parameters. elementId and the current player
function changeBoardState(elementID, currentPlayer){
    //If the contents of the array gameBoard at index elementID are equal to a space
    if (gameBoard[elementID] === ' '){
        //run the splice method on the array gameBoard
        //The splice method can take three parameters
        //Where are we looking in the array?
        //How many things do you want me to delete while im here?
        //What would you like me to put here in place of the things that I have removed?
        gameBoard.splice(elementID, 1, currentPlayer);
    }
}
//These were the console logs that i used to trouble shoot my logic as I was working on this function
// console.log(gameBoard);
// console.log(elementID);
// console.log(gameBoard[elementID]);

//Failed Iterations of this function
//Im not going to waste my time trying to comment through these
// else if(gameBoard[elementID].textContent === ''){
//     gameBoard.splice(elementID, 1, currentPlayer);
// }

// function changeBoardState({ index = ''}){
//     gameBoard.splice(elementID, 1, currentPlayer);
// }

//===========================================================================================================================================================================

//This is a creatDiv function that I built in a previous project
//I litterally copy pasted it in here in its entierty
//Create div with 3 parameters
function createDiv(clas, id, parent) {
    //I needed a variable to appent the element to, grabbed it with the createElement
    let div = document.createElement('div');
    //Set both attributes using parameters passed in
    div.setAttribute('id', id);
    div.setAttribute('class', clas);
    //this creates teh div element as a child of the parent element
    //It is passed through as a parameter
    parent.appendChild(div);
    //I want to return the div at the end so it will actually create the div when called
    return div;
}
//===========================================================================================================================================================================

//This is the function that i built to draw the tic tac toe board that you play on
function drawBoard(){
    //I need to set the div container as a local variable so I can use it inside my function
    //Create div with all the bootStrap classes I need
    // The ID I want it to have, and the parent element body
    //I can use body as a variable becuase it is a global variable
    let container1 = createDiv('container text-center bg-secondary h-75', 'mainContain', body)
    //I need to set the div row as a local variable
    //Repeat lines 72 & 73
    //I use container1 because bootstrap
    let row1 = createDiv('row h-50', 'row1', container1);
    //This is a for loop that i am using to create the number of columns I need to build a tic tac toe board
    //It should run a number of 9 times
    for(let i=0; i<=8; i++) {
        //Createing 9 divs with bootStrap lingo for how it looks
        //I used a telmplate litteral to give the element that I am creating its unique id by using the number that i represents in the for loop
        //Its parent is row1
        createDiv('col-4 shadow', `${i}`, row1);
        //This is declaring another element as a local variable so I can manipulate it
        //Also using a template literal to change the id of the element I am trying to select
        let element = document.getElementById(`${i}`);
        //This was originaly filled with 'empty box' or whatever
        //Then I was able to style the board a little bit with bootstrap and The strings were no longer needed
        //So i just replaced what was there with an empty string
        // I cant rememeber if i tried to not use this step at all but I will come back to it later!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        element.textContent = '';
        //Add an event listener to each element being created
        //listen for a click on an element
        //when clicked run makeAMove
        element.addEventListener('click', makeAMove, { once: true });
    }
}

//===========================================================================================================================================================================

//This is for reseting my gameBoard back to the original state
function resetBoard () {
    //change the global variable of gameBoard back to what it was originally
    gameBoard = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '];
    //console.log(gameBoard);
    //grab the element that gets created when the game is over and declare it as results
    let results = document.getElementById('results')
    //I needed to add some defensive programing 
    //If I tried to use my reset button before the game was over it wouldn't run anything
    //If results is anything but null(meaning that results had to be created for it to not equal null)
    //if results is not null 
    if (results !== null){
        //remove the results element
        results.remove();
    }
    //Set player back to X
    player = 'X';
    //Set clickCount to 0 so the game doesnt end early
    clickCount = 0;
    //loop through all of the elements and reset the text to a space
    //effectivly removing the shown choices in the tic tac toe tiles
    for(let i=0; i<=8; i++) {
        let element = document.getElementById(`${i}`);
        element.textContent = ' ';
        //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! point out during demoDay
        element.addEventListener('click', makeAMove, { once: true });
    }

}
//===========================================================================================================================================================================
//creating button function
//This function is full of methods I have detailed extensivly in the previous functions
//I'm going to save my time and not comment them directly
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
//===========================================================================================================================================================================

//This is my init function, just called drawPage
//Again going to save time here
function drawPage(){
    createDiv('h1 text-center', 'title', body);
    createDiv('p text-center', 'whosTurn', body);
    document.getElementById('title').textContent = 'Tick Tac That Toe';
    document.getElementById('whosTurn').textContent = 'Player X goes first';
    drawBoard();
    createButton();
    
}
//===========================================================================================================================================================================
function makeAMove(){
    //trying to call for the event target inside of the function
    //Declare a variable as the target of the event that just happend.
    //This function would be called by an event listener
    //Get the target of the event that just happend
    //And then get the id of that target
    //This will allow us to use a variable to signify what element the player has chosen
    let target = event.target;
    let id = target.id;
    //This is a variable to use if someone wins
    //It is the parent element for the result div
    let resultElement = document.getElementById('mainContain');
    // console.log(target);
    //Incriment clickCount by 1 everytime this function is ran
    clickCount++;
    //========================
    //small pseudo session
    // console.log(isNaN(id));
    // console.log(player);
    //running into a scoping issue with the parameter player
    // console.log(gameBoard);
    //if 
    //declare winner is true
    //display a message of player(player is the variable) is the winner
    // console.log(player);
    // console.log('before IF', player);
    //========================
    //if the contents of the array gameBoard at index whatever the target id is
    //Are equal to a space
    if (gameBoard[id] === ' '){
        //run changeBoardState
        changeBoardState(id, player);
        // change the targets text content to the current player(global varible)
        target.textContent = player;
        
        // if declareWinner returns true
        if (declareWinner() === true) {
            createDiv('row', 'results', resultElement);
            //create the results div that diplays the winner
            document.getElementById('results').textContent = player + ' is the winner!';
            //remove eventListener from all tiles
            //This is a for loop that incriments i 9 times
            for(let i=0; i<=8; i++) {
                //first it should point to the div with an id of 0
                let element = document.getElementById(`${i}`);
                //It does, I know because of this console log
                // console.log(element);
                //removes eventListener from the
                element.removeEventListener('click', makeAMove);
            }
            //return will allow me to stop the rest of the make a move function
            return;

        }
        //This is my draw condition
        //If the variable clickCount is greater than or equal to 9
        if (clickCount >= 9) {
            //Create the results div
            createDiv('row', 'results', resultElement);
            //Set div text content to the draw message
            document.getElementById('results').textContent = 'You have Tic Tacked That Toe enough... It"s a tie';
            //remove eventListeners from all tiles
            removeEventListener();
            //return to stop the process of the function
            return;
        }
        //If either the win or the draw conditions aren't met
        //Change the player from current to the next player
        changePlayer();
        // console.log('afterIF', player)
    }

}
//===========================================================================================================================================================================
//function remove event Listeners
// function removeEventListener () {
// //loops 9 times
//     for(let i=0; i<=8; i++) {
//         //declare each individual element by its id
//         console.log(element);
//         //remove the event listener from that element
//         element.removeEventListener('click', null);
//     }   
// }
//===========================================================================================================================================================================
// This is a bunch of if statements that check to see if any of the winning conditions have been met.  
//It compares the current state of the gameBoard with hard-coded winning conditions
//I want to refacter this at a latter time but there are more important matters at the current moment that I need to deal with
function declareWinner(){
    for(i of gameBoard) {
        // console.log(gameBoard[i]);
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
//===========================================================================================================================================================================
