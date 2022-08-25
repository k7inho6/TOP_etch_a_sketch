const container = document.getElementById("container");
const button = document.getElementById("resetButton");

let userInput = 0;
let rows = userInput;
let cols = userInput;

function makeGrid() {  
    // Get user input
    while (1>0) {
        userInput = prompt("Please enter your grid size. Maximum: 100");
        if (userInput > 0 && userInput < 101) {
            break;
        };
    };
    rows = userInput;
    cols = userInput;

    // Make the grid skeleton
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);

    // Loop to create and append grid items to the div container
    for (i = 0; i < (rows * cols); i++) {
        let cell = document.createElement("div");
        container.appendChild(cell).className = "grid-item";
        cell.id = `grid-item${i+1}`;
    };

    // Add event listener to change grid cells color when you hover them with the mouse
    for ((i = 0); i < (rows * cols); i++) {
        let item = document.getElementById(`grid-item${i+1}`);
        item.addEventListener('mouseenter', changeClass);
    };
};

// Make function to add the hovered css class to the event target
function changeClass(e) {
    e.target.classList.add("hovered");
};

// Create function to remove the current sketch and then call makeGrid to make a new one
function cleanGrid() {
    for ((i = 0); i < (rows * cols); i++) {
        let item = document.getElementById(`grid-item${i+1}`);
        item.remove();
    };
    makeGrid();
};

// Add event listener to call cleanGrid when the reset button is clicked
button.addEventListener('click', cleanGrid);

makeGrid();