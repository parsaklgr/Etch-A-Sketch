const defaultSizeOfGrid = 16;

const container = document.querySelector("div#container");
container.classList.toggle("container");

function colorDiv(e) {
    e.target.classList.remove("container-div");
    e.target.classList.add("container-div-colored");
}

function formatGrid(grid, formatSize) {
    grid.classList.toggle("grid");
    grid.style["grid-template-columns"] = `repeat(${formatSize
}, 1fr)`;
    grid.style["grid-template-rows"] = `repeat(${formatSize
}, 1fr)`;
    for (let i = 0; i < formatSize; i++) {
        for (let j = 0; j < formatSize; j++) {
            let div = document.createElement("div");
            div.classList.toggle("container-div");
            div.addEventListener("mouseenter", colorDiv);
            grid.appendChild(div);
        }
    }
}
function initGrid() {
    const grid = document.createElement("div");
    formatGrid(grid, defaultSizeOfGrid);
    container.appendChild(grid);
}
const gridTop = document.createElement("div");
const gridTopdescription = document.createElement("label");
gridTopdescription.textContent = "Enter the size of the grid (less than 100): ";
gridTopdescription.setAttribute("for", "grid-input");
const gridTopInput = document.createElement("input");
gridTopInput.setAttribute("type", "text");
gridTopInput.setAttribute("id", "grid-input");
gridTopInput.setAttribute("value", "16");
const gridTopButton = document.createElement("button");
gridTopButton.textContent = "Apply";
gridTopButton.addEventListener("click", changeGridFormat);
gridTop.appendChild(gridTopdescription);
gridTop.appendChild(gridTopInput);
gridTop.appendChild(gridTopButton);
gridTop.classList.toggle("grid-top");
container.appendChild(gridTop);

function changeGridFormat() {
    const gridTopInput = document.querySelector("#grid-input");
    let formatSize = parseInt(gridTopInput["value"]);
    console.log(formatSize);
    if (formatSize > 100) {
        return;
    }
    const currentGrid = document.querySelector(".grid");
    const container = document.querySelector(".container");
    container.removeChild(currentGrid);
    const grid = document.createElement("div"); 
    formatGrid(grid, formatSize);
    container.appendChild(grid); 
}
initGrid();





