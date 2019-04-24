let body = document.querySelector('body');
let createGrid = document.querySelector('button');
let grid = document.querySelector('.container');
let lines, collumns;
let colorPattern = 'single';
let singleColor = document.querySelector('.single');
let randomColors = document.querySelector('.random');

grid.style.setProperty('display', 'grid');
grid.style.setProperty('grid-template', 'repeat(' + 16 + ', 1fr) / repeat(' + 16 + ', 1fr)');
for (lines = 0; lines < 16; lines++) {
    for (collumns = 0; collumns < 16; collumns++) {
        let square = document.createElement('div');
        square.classList.add('square');
        square.addEventListener('mouseover', () => {
            if (colorPattern === 'single') {
                square.style.setProperty('background-color', 'black');
            } else if (colorPattern === 'random') {
                let red, green, blue;
                red = Math.floor(Math.random() * 256);
                green = Math.floor(Math.random() * 256);
                blue = Math.floor(Math.random() * 256);
                square.style.setProperty('background-color', 'rgb(' + red + ', ' + green + ', ' + blue +')');
            }
        });
        grid.appendChild(square);
    }
}

function gridCreation (x) {
    body.removeChild(grid);
    grid = document.createElement('div');
    grid.classList.add('container');
    body.appendChild(grid);
    for (lines = 0; lines < x; lines++) {
        for (collumns = 0; collumns < x; collumns++) {
            let square = document.createElement('div');
            square.classList.add('square');
            square.addEventListener('mouseover', () => {
                if (colorPattern === 'single') {
                    square.style.setProperty('background-color', 'black');
                } else if (colorPattern === 'random') {
                    let red, green, blue;
                    red = Math.floor(Math.random() * 256);
                    green = Math.floor(Math.random() * 256);
                    blue = Math.floor(Math.random() * 256);
                    square.style.setProperty('background-color', 'rgb(' + red + ', ' + green + ', ' + blue +')');
                }
            });
            grid.appendChild(square);
        }
        grid.style.setProperty('display', 'grid');
        grid.style.setProperty('grid-template', 'repeat(' + x + ', 1fr) / repeat(' + x + ', 1fr)');
    }
}


createGrid.addEventListener('click', () => {
    let side = prompt('Set number of squares per side:', 0);
    grid.style.setProperty('display', 'grid');
    grid.style.setProperty('grid-template', 'repeat(' + side + ', 1fr) / repeat(' + side + ', 1fr)');
    gridCreation(side);
});

singleColor.addEventListener('click', () => {
    colorPattern = 'single';
});

randomColors.addEventListener('click', () => {
    colorPattern = 'random';
});
