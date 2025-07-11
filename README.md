# Etch-A-Sketch

A browser-based drawing application inspired by the classic Etch-A-Sketch and pixel art. This project allows users to "draw" on a grid by hovering their mouse over squares, chaing their color. The grid size is customizable. 

## Live Demo



## Features 

* Dynamic Grid Generation:
- Create a grid of squares entirely using JavaScript .
* Interactive Drawing:
- Squares change color when the mouse hovers over them, leaving a persistent trail.
- Progressive darkening effect, making squares fully black after 10 interactions.
* Customizable Grid Size:
- A "New Grid" button allows the user to specify a new grid dimension (e.g., 64x64) up to 100x100.
* Responsive Grid:
- The grid maintaines its total size, with individual squares adjusting to fit the new dimensions.

## Technologies Used
- HTML5: For the basic page structure
- CSS3: For styling and creating the grid layout using (Flexbox).
- JavaScript (ES6+): For DOM manipulation, grid generation, event handling, and interactive drawing logic.

## How to Play
1. Move your mouse over the grid squares to draw.
2. Click the "New Grid" button to clear the current grid and specify a new number of squares per side (between 1 and 100).
