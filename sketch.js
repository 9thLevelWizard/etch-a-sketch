createGrid(16); // default grid size 16*16
addColoringEvent();
addResizingEvent();
addWipeEvent();

function createGrid(gridSize) {
    const grid = document.querySelector(".grid");

    for (let row = 1; row <= gridSize; row++) {

        for (let column = 1; column <= gridSize; column++) {
            const gridSpot = document.createElement("div");
            gridSpot.className = `grid-spot-row${row}-column${column}`;
            gridSpot.style.minHeight = `${(500 / gridSize) - 2}px`; // 500px (grid width) divided by gridSize (number of sides), subtracted by 2 (1px border on either side) = properly fitting grid spot size
            gridSpot.style.minWidth = `${(500 / gridSize) - 2}px`; //
            grid.appendChild(gridSpot);
        };
    };
};

function deleteGrid() {
    const gridSpots = document.querySelectorAll(".grid > div");
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

function wipeGrid() {
    const gridSpots = document.querySelectorAll(".grid > div");
    gridSpots.forEach((gridSpot) => {
        gridSpot.style.backgroundColor = "white";
    });
};

function addResizingEvent() {
    const sizeButton = document.querySelector(".size-button");
    sizeButton.addEventListener("click", resizeGrid);
};

function addWipeEvent() {
    const wipeButton = document.querySelector(".wipe-button");
    wipeButton.addEventListener("click", wipeGrid);
};

function getRandomRGBColor() {
    let RGB1 = Math.floor(Math.random() * (255 - 0 + 1) + 0);
    let RGB2 = Math.floor(Math.random() * (255 - 0 + 1) + 0);
    let RGB3 = Math.floor(Math.random() * (255 - 0 + 1) + 0);
    let RGBcolor = `rgb(${RGB1}, ${RGB2}, ${RGB3})`;

    return RGBcolor;
};

function addColoringEvent() {
    const gridSpots = document.querySelectorAll(".grid > div");
    const colorOptions = document.querySelector(".color-options");
    let checkedColor = document.querySelector('input[name="color"]:checked');
    
    colorOptions.addEventListener("change", () => {
        checkedColor = document.querySelector('input[name="color"]:checked');
    });
    
    gridSpots.forEach((gridSpot) => {
        gridSpot.addEventListener("mouseenter", () => {
            if (checkedColor.id === "black") {
                gridSpot.style.backgroundColor = "black";
            };
            if (checkedColor.id === "white") {
                gridSpot.style.backgroundColor = "white";
            };
            if (checkedColor.id === "colorfy") {
                gridSpot.style.backgroundColor = getRandomRGBColor();
            };
        });
    });
};