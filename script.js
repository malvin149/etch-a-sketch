const gridContainer = document.getElementById( 'gridContainer' );
const resetButton = document.getElementById( 'resetButton' );


const MAX_GRID_SIZE = 100;
const INITIAL_GRID_SIZE = 16;

const clearGrid = () => {
    while ( gridContainer.firstChild ) {
        gridContainer.removeChild( gridContainer.firstChild );
    }
}

// Random Color function
const getRandomRgbColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
};


const createGrid = ( sidesPerSquare ) => { 
    clearGrid();

    let times = sidesPerSquare * sidesPerSquare;
    const containerSize = 960;
    const squareSize = containerSize / sidesPerSquare;

    for ( let i = 0; i < times; i++ ) {
        const square = document.createElement( 'div' );
        square.classList.add( '.grid-square' );
        
        square.style.width = `${ squareSize }px`;
        square.style.height = `${ squareSize }px`;
        square.dataset.hits = 0;
        
        square.addEventListener( 'mouseover', ( event ) => {
            // event.target.classList.add( 'colored' );
            let hits = parseFloat(event.target.dataset.hits) || 0;
            hits++;
            
            event.target.dataset.hits = hits;
            let opacity = hits / 10;
            if (opacity > 1) {
                opacity = 1;
            }
            event.target.style.opacity = opacity;
            // event.target.style.backgroundColor = getRandomRgbColor();
            event.target.style.backgroundColor = 'black';
        })

        gridContainer.appendChild( square );
    }

};



const handleNewGridClick = () => {
    let newSize = null;
    let isValidInput = false;

    while ( !isValidInput ) {
        const userInput = prompt('How many squares per side for the new grid');
        
        if(userInput === null){
            return;
        }

        const num = parseInt( userInput );

        if ( isNaN(num) || num <= 0 || num > MAX_GRID_SIZE ) {
            alert(`Invalid input. Please enter a number between 1 and ${MAX_GRID_SIZE}`);
        } else {
            newSize = num;
            isValidInput = true;
        }
    }
    
    if ( newSize !== null) {
        createGrid(newSize);
    }

}


createGrid( INITIAL_GRID_SIZE );

resetButton.addEventListener('click', handleNewGridClick);


