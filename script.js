
// Global variables for DOM manipulation
const gridContainer = document.getElementById( 'gridContainer' );
const resetButton = document.getElementById( 'resetButton' );

// Grid dimensions 
const MAX_GRID_SIZE = 100;
const INITIAL_GRID_SIZE = 16;


// HELPER FUNCTIONS
// Removes all child elements (grid squares) from the gridContainer
const clearGrid = () => {
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild);
    }
}

// Generates a random RGB color string (e.g., 'rgb(255, 0, 128)').
// for extra credit option
const getRandomRgbColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
};


/*
   Event handler for when mouse hovers over a grid square
   Implements the progressive darkening drawing effectt
   The mouseover event object. 
 */

const handleSquareHover = (event) => {
    const square = event.target; // specific square element that trigger the event

    let hits = parseFloat(square.dataset.hits) || 0;
    hits++
    square.dataset.hits = hits;

    // Calc opacity (10% per hits), capping at 1.0 (fully opaque)
    let opacity = hits / 10;
    if (opacity > 1) {
        opacity = 1;
    }
    
    // Apply the calc opacity and set background color to black
    square.style.opacity = opacity;
    square.style.backgroundColor = 'black';

    //  ALTERNATIVE DRAWING EFFECT
    /* square.classList.add('colored'); -- Basic drawing, turn a fixed color instantly
    *  square.style.backgroundColor = getRandomRgbColor(); -- Random RGB Color, turns a new color each time
    */
}


// MAIN GRID CREATION 
/* 
Generate a new grid of squares within the container.
clears any existing grid, calculates the square sizes and attach hover effect
sidesPerSquare = number of square (64 for (64 x 64)) 
*/
const createGrid = (sidesPerSquare) => { 
    clearGrid();

    // Calc the size of each individual square based on container's actual width
    const containerSize = gridContainer.clientWidth;
    const squareSize = containerSize / sidesPerSquare;

    // Ensures flexbox properties are applied to the container
    gridContainer.style.display = 'flex';
    gridContainer.style.flexWrap = 'wrap';

    for ( let i = 0; i < (sidesPerSquare * sidesPerSquare); i++ ) {
        const square = document.createElement('div');
        square.classList.add('grid-square');
        
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;
        square.dataset.hits = 0;
        
        square.addEventListener('mouseover', handleSquareHover); // Attach hover effect

        gridContainer.appendChild(square); // Add square to the DOM
    }

};


// NEW GRID BUTTON CLICK HANDLER
/*
Handles the New grid button click
Prompts the user for a new grid size, validates input and regenrates the grid 
*/ 

const handleNewGridClick = () => {
    let newSize = null;
    let isValidInput = false;

    // Loop until valid input is received or user cancels
    while (!isValidInput) {
        // prompt() returns 'null' is user clicks 'cancel'
        const userInput = prompt(`How many squares per side for the new grid (max ${MAX_GRID_SIZE})`);
        
        if(userInput === null){
            return; // Exit the function if user cancels
        }

        const num = parseInt(userInput);

        // validation for a number, positive and within the 100 max size
        if ( isNaN(num) || num <= 0 || num > MAX_GRID_SIZE ) {
            alert(`Invalid input. Please enter a number between 1 and ${MAX_GRID_SIZE}`);
        } else {
            newSize = num;
            isValidInput = true; // Exit as valid input was received
        }
    }
    
    if ( newSize !== null) {
        createGrid(newSize); // create new grid with validated size
    }

}


createGrid( INITIAL_GRID_SIZE ); // Default grid on page load.

// Attach event listener to the reset button to trigger grid regenration
resetButton.addEventListener('click', handleNewGridClick);


