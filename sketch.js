const grid = document.querySelector(".grid");

createGrid(16); // default grid size 16*16
addColoringEvent();
resizeGrid();
wipeGrid();

function createGrid(gridSize) {
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

function resizeGrid() {
    const sizeButton = document.querySelector(".size-button");

    sizeButton.addEventListener("click", () => {
        let gridSize = parseInt(prompt("How many squares per side would you like for your sketch? Maximum limit: 100", 16));

        if (gridSize <= 100) {
            grid.replaceChildren();
            createGrid(gridSize);
            addColoringEvent();
        }
        else {
            alert("Please keep the number of squares per side to less than 100, including.");
        };
    });
};

function wipeGrid() {
    const wipeButton = document.querySelector(".wipe-button");

    wipeButton.addEventListener("click", () => {
        const gridSpots = document.querySelectorAll(".grid > div");
        gridSpots.forEach((gridSpot) => {
            gridSpot.style.backgroundColor = "white";
        });
    });
};

function getRandomRGBColor() {
    let RGB1 = Math.floor(Math.random() * (255 - 0 + 1) + 0);
    let RGB2 = Math.floor(Math.random() * (255 - 0 + 1) + 0);
    let RGB3 = Math.floor(Math.random() * (255 - 0 + 1) + 0);
    
    return `rgb(${RGB1}, ${RGB2}, ${RGB3})`;
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