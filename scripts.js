const container = document.getElementById("container");
const gridButton = document.querySelector(".gridBtn");

let currentColor = '#' + Math.floor(Math.random() * 16777215).toString(16);

let grid = 16

const colors = { black: 'black' }

function makeRows(rows, cols) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (c = 0; c<(rows*cols); c++) {
        let cell = document.createElement("div");
        container.appendChild(cell).className = "grid-item"
        
        cell.addEventListener('mouseover',function() {
            cell.style.backgroundColor = currentColor
            refreshColour();
          })
    };
};

function refreshRows() {
    container.replaceChildren();
    makeRows(grid, grid);
}

function refreshColour() {
    currentColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
}

function createGrid() {
    gridButton.addEventListener("click", () => {
        grid = prompt("Please give a number between 1 and 100")

        if (grid > 100) {
            alert("Bit High init?")
            grid = 16
        } else if (grid <= 0) {
            alert("Bit Low init?")
            grid = 16
        }
        refreshRows()
    })
}

makeRows(grid, grid);
createGrid();