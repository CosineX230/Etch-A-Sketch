function createGrid(size = 16) {
    const container = document.getElementById("grid");

    if (!container) return;

    container.style.setProperty("--grid-size", size);

    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            const cell = document.createElement("div");
            cell.className = "cell";
            cell.backgroundColor = 'red';
            cell.addEventListener('mouseover', function() {
                cell.style.backgroundColor = 'grey';
            });
            container.appendChild(cell);
        }
    }
}

function removeGrid() {
    const container = document.getElementById("grid");
    while(container.firstChild) {
        container.removeChild(container.firstChild);
    }
}

function resetGrid() {
    let length = prompt("Enter the number of rows");
    if(length > 50) {
        length = 50;
    }
    removeGrid();
    createGrid(length);
}

createGrid();