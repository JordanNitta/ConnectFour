// State vaiables:
// turn: 1/-1
// board: 2D array 
    //null -> no player
    //1/-1 -> player at that cell
// Winner: 

/*----- constants -----*/
const COLORS = {
    '0': 'white',
    '1': 'purple',
    '-1': 'orange'
}

/*----- state variables -----*/
let board // Array of 7 column arrays
let turn // 1 or -1 to flip turns
let winner // null = no winner 1 or -1 winner 'Tie' = Tie game



/*----- cached elements  -----*/
const markersEl = document.getElementById('markers')
const messageEl = document.querySelector('h1')

/*----- event listeners -----*/


/*----- Function listeners -----*/
// Initialize all state, then call render()
// The render job is to transform the state
init()
function init(){
    // Visualize the boards's mapping to the dom,
    // Rotate the board  array 90 degrees counter-clockwise
    board = [
        [0, 0, 0, 0, 0, 0,], // col 0
        [0, 0, 0, 0, 0, 0,], // col 1
        [0, 0, 0, 0, 0, 0,], // col 2
        [0, 0, 0, 0, 0, 0,], // col 3
        [0, 0, 0, 0, 0, 0,], // col 4
        [0, 0, 0, 0, 0, 0,], // col 5
        [0, 0, 0, 0, 0, 0,], // col 6
    ]
    // Starting with player 1
    turn = 1
    winner = null
    render()
}

// Visualize all state in the DOM
function render(){
    renderBoard()
    rednerMessage()
    // Hide/showing UI Elements(controls)
    renderControls()
}

function renderBoard(){
    // Need to loop over the board array
    board.forEach(function(colArr, colIdx) {
      // Iterate over the cells in current column(calArr)
        colArr.forEach(function(cellVal, rowIdx){
            const cellId = `c${colIdx}r${rowIdx}`

            const cellEl = document.getElementById(cellId)
            console.log(cellVal)
            // COLORS IS are object and were using the current value inside are board to ajust it to the apporiate colors
            cellEl.style.backgroundColor = COLORS[cellVal]
        })
    })
}

function rednerMessage(){
    if(winner === 'T'){
        messageEl.innerText = 'Game is a tie!!!'

    } else if(winner){
        messageEl.innerHTML = `${COLORS[winner]}`
        messageEl.innerHTML = `<span style="color: ${COLORS[winner]}">${COLORS[turn].toUpperCase()}</span> Wins! `

    } else{
        // Game is in play
        messageEl.innerHTML = `<span style="color: ${COLORS[turn]}">${COLORS[turn].toUpperCase()}</span>'s Turn'`
    }
}

function renderControls(){
    // Ternary expression is the go to when you want 1 of 2 values returned
    
}
