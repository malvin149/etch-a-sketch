const gridContainer = document.getElementById( 'gridContainer' );
const resetButton = document.getElementById( 'resetButton' );


const clearGrid = () => {
    while ( gridContainer.firstChild ) {
        gridContainer.removeChild( gridContainer.firstChild );
    }
}

const handleNewGridClick = () => {
    let newSize = null;
    let isValidInput = false;

    while ( !isValidInput ) {
        const userInput = prompt('How many squares per side for the new grid');
        
        if(userInput === null){
            return;
        }

        const num = parseInt( userInput );

        if ( isNaN(num) || num <= 0 || num > 100 ) {
            alert('Invalid input. Please enter a number between 1 and 100');
        } else {
            newSize = num;
            isValidInput = true;
        }
    }
    
    if ( newSize !== null) {
        createGrid(newSize);
    }

}

resetButton.addEventListener('click', handleNewGridClick);

const createGrid = (sidesPerSquare ) => { 
    clearGrid();

    let times = sidesPerSquare * sidesPerSquare;
    const containerSize = 960;
    const squareSize = containerSize / sidesPerSquare;

    for ( let i = 0; i < times; i++ ) {
        const square = document.createElement( 'div' );
        
        square.classList.add( '.grid-square' );
        square.style.width = `${ squareSize }px`;
        square.style.height = `${ squareSize }px`;

        square.addEventListener( 'mouseover', ( event ) => {
            event.target.classList.add( 'colored' );
        })

        gridContainer.appendChild( square );
    }


};

createGrid( 16 );