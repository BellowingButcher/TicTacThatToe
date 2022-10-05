Start here
- on page load
    - declare variables
        - winning Arrays
            - ['','','','','','','','','']
            - ['','','','','','','','','']
            - ['','','','','','','','','']
            - ['','','','','','','','','']
            - ['','','','','','','','','']
            - ['','','','','','','','','']
            - ['','','','','','','','','']
            - ['','','','','','','','','']
        - state object
            - player: 'x', 'o'
            - boardState: ['', '', '', '', '', '', '', '', '']
            - gameActive: true or false (Bool)?? maybe not needed
        - tile1
        - tile2
    - drawBoard
        - build tic tac toe board with title and game reset button

========================================================================

This is where i will be pseudocoding the app without building the table

function to change player
    - 
======================================================================
Functionality

funtion changePlayer()
    - if player is x
        - then player = o
    else player = x
    

function changeBoardState()
    - insert player into array
        - at selected players tile(index)

function makeAMove()
    - if tile is empty
        - insert player into tile with changeBoardState(tile)
            - using players tile choice as the parameter
        - if checkWin is false
            - run changePlayer()
    - else endGame/declareWinner
        
function init()
on page load
    - create title 'Tic Tac That Toe'
    - create game board
        - 1 row with 9 columns-4 in each row resulting in 9 different blocks/tiles
        - each block/tile has a unique id
        - Starting at the left and stepping right
            - id 'tile0', id 'tile1', id 'tile2', id 'tile3', id 'tile4', id 'tile5', id 'tile6', id 'tile7', id 'tile8'
            - 

