createGrid(16);

const gridSpots = document.querySelectorAll(".container > div");

gridSpots.forEach((gridSpot) => {
    gridSpot.addEventListener("mouseenter", colorBlack);
});

const sizeButton = document.querySelector(".size-button");
let gridSize = sizeButton.addEventListener("click", getGridSize);

function getGridSize() {
    return parseInt(prompt("How many squares per side would you like for your sketch?", 16));
};

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

function colorBlack() {
    this.style.backgroundColor = "black";
}