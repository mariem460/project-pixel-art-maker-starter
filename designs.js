// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid() {
    const columnCount = document.getElementById('inputWidth').value;
    const rowCount = document.getElementById('inputHeight').value;
    const table = document.getElementById('pixelCanvas');
    table.innerHTML = '';
    
    for (let i = 0; i < rowCount; i++) {
        const tr = document.createElement('tr');
        for (let j = 0; j < columnCount; j++) {
            const td = document.createElement('td');
            td.style.borderColor = "black";
            td.style.borderWidth = "1px";
            td.style.borderStyle = "solid";
            td.style.backgroundColor = "white"
            td.onclick = function (click) {
                const color = document.getElementById('colorPicker').value;
                const td  = click.target;
                if (td.style.backgroundColor === 'white') {
                    td.style.backgroundColor = color;
                } else {
                    td.style.backgroundColor = 'white';
                }
            }
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }

// Your code goes here!
}
