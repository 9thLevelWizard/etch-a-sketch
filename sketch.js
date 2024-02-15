createGrid(16); // default grid size 16*16
addColoringEvent();
addResizingEvent();

function createGrid(gridSize) {
    const container = document.querySelector(".container");

    for (let row = 1; row <= gridSize; row++) {

        for (let column = 1; column <= gridSize; column++) {
            const gridSpot = document.createElement("div");
            gridSpot.className = `grid-spot-row${row}-column${column}`;
            gridSpot.style.minHeight = `${(500 / gridSize) - 2}px`; // 500px (container size) divided by gridSize (number of sides), subtracted by 2 (1px border on either side) = properly fitting grid spot size
            gridSpot.style.minWidth = `${(500 / gridSize) - 2}px`; //
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
    let gridSize = parseInt(prompt("How many squares per side would you like for your sketch? Maximum limit: 100", 16));
    if (gridSize <= 100) {
        deleteGrid();
        createGrid(gridSize);
        addColoringEvent();
    }
    else {
        alert("Please keep the number of squares per side to less than 100, including.");
    };
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