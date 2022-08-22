const container = document.getElementById("container");

function makeGrid(rows, cols) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);

    for (i = 0; i < (rows * cols); i++) {
        let cell = document.createElement("div");
        container.appendChild(cell).className = "grid-item";
        cell.id = `grid-item${i+1}`;
    };
};


let userInput = prompt("Please enter your grid size")
const rows = userInput;
const cols = userInput;
makeGrid(rows, cols);

function changeClass(e) {
    e.target.classList.add("hovered");
};

for ((i = 0); i < (rows * cols); i++) {
    let item = document.getElementById(`grid-item${i+1}`);
    item.addEventListener('mouseenter', changeClass);
};
