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
            - tile: 'x', 'o', ''
            - player: 'x', 'o'
            - boardState: ['', '', '', '', '', '', '', '', '']
            - gameActive: true or false (Bool)?? maybe not needed
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