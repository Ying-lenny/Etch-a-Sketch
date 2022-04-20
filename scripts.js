const container = document.getElementById("container");

let currentColor = 'black'

const colors = { black: 'black' }

function makeRows (rows, cols) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (c = 0; c<(rows*cols); c++) {
        let cell = document.createElement("div");
        cell.innerText = (c+1);
        container.appendChild(cell).className = "grid-item"
        
        cell.addEventListener('mouseover',function() {
            cell.style.backgroundColor = currentColor
          })
    };
};

makeRows(16, 16);