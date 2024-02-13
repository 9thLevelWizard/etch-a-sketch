createGrid();

function createGrid() {
    for (let row = 1; row <= 16; row++) {

        for (let column = 1; column <= 16; column++) {
            const gridSpot = document.createElement("div");
            gridSpot.className = `grid-spot-row${row}-column${column}`;

            const container = document.querySelector(".container");
            container.appendChild(gridSpot);
        };
    };
};
