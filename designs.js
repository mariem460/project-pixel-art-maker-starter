// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

// Store the input values in consts to use them in the loop
function makeGrid() {
    const columnCount = document.getElementById('inputWidth').value;
    const rowCount = document.getElementById('inputHeight').value;
    // get the table by its Id
    const table = document.getElementById('pixelCanvas');

    // prevent adding table over an old table
    table.innerHTML = '';

    // For loop to create and store the tr element
    for (let i = 0; i < rowCount; i++) {
        const tr = document.createElement('tr');
        // create and store td element
        for (let j = 0; j < columnCount; j++) {
            const td = document.createElement('td');
            // make the td color (white) by default
            td.style.backgroundColor = 'white';
            // assign our onClick function to the td.onclick function
            // so it will be called when we click on the td
            td.onclick = onClick
            tr.appendChild(td);
        }
        // append the newly created tr to the table
        table.appendChild(tr);
    }
    // onCick function will be called to change td with default color (white) to the new one,
    // or change colored td to white
    function onClick(event) {
        const color = document.getElementById('colorPicker').value;
        const td = event.target;
        if (td.style.backgroundColor === 'white') {
            td.style.backgroundColor = color;
        } else {
            td.style.backgroundColor = 'white';
        }
    }
}
