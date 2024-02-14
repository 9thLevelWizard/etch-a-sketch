createGrid(16); // default grid size 16*16
addColoringEvent();
addResizingEvent();

function createGrid(gridSize) {
    const container = document.querySelector(".container");

    for (let row = 1; row <= gridSize; row++) {

        for (let column = 1; column <= gridSize; column++) {
            const gridSpot = document.createElement("div");
            gridSpot.className = `grid-spot-row${row}-column${column}`;
            container.appendChild(gridSpot);
        };
    };
};

function deleteGrid() {
    const gridSpots = document.querySelectorAll(".container > div");
    gridSpots.forEach((gridSpot) => {
        gridSpot.remove();
    });
};

function resizeGrid() {
    let gridSize = parseInt(prompt("How many squares per side would you like for your sketch?", 16));
    deleteGrid();
    createGrid(gridSize);
    addColoringEvent();
};

function addColoringEvent() {
    const gridSpots = document.querySelectorAll(".container > div");

    gridSpots.forEach((gridSpot) => {
        gridSpot.addEventListener("mouseenter", colorGridSpotBlack);
    });
};

function addResizingEvent() {
    const sizeButton = document.querySelector(".size-button");
    sizeButton.addEventListener("click", resizeGrid);
};

function colorGridSpotBlack() {
    this.style.backgroundColor = "black";
};