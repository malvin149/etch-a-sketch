const gridContainer = document.getElementById('gridContainer');


const createGrid = ( sidesPerSquare ) => {
    let times = sidesPerSquare * sidesPerSquare;
    const containerSize = 960;
    const squareSize = containerSize / sidesPerSquare;

    for (let i = 0; i < times; i++) {
        const square = document.createElement('div');
        
        square.classList.add('.grid-square');
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;

        square.addEventListener('mouseover', (event) => {
            event.target.classList.add('colored');
        })

        gridContainer.appendChild(square);
    }


};

createGrid(16)