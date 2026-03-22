function createGrid(size) {
    const main = document.querySelector(".main");
    const squareSize = main.clientWidth / size;

    for (let i = 0; i < size * size; i++) {
        const square = document.createElement("div");
        square.classList.add("square");
        square.setAttribute("id", `sq${i}`);
        square.style.height = `${squareSize}px`;
        square.style.width = `${squareSize}px`;

        main.appendChild(square);
    }

    main.addEventListener("mouseover", setBackgroundColor);
}

function setBackgroundColor(event) {
    const red = getRandomNumber(255);
    const green = getRandomNumber(255);
    const blue = getRandomNumber(255);
    event.target.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
    event.target.style.opacity = squareOpacity < 1 ? `${squareOpacity += 0.1}` : `${squareOpacity}`;
}

function getRandomNumber(max) {
    return Math.floor(Math.random() * (max + 1));
}

function clearGrid() {
    const main = document.querySelector(".main");
    main.removeEventListener("mouseover", setBackgroundColor);

    const squares = document.querySelectorAll(".square");
    squares.forEach((square) => {
        square.remove();
    });

    squareOpacity = 0;
}

let squareOpacity = 0;
createGrid(16);

const button = document.querySelector(".resize-button");
button.addEventListener("click", () => {
    let newSize;

    while (!Number.isInteger(newSize) || newSize < 16 || newSize > 100) {
        newSize = parseInt(prompt("Choose a new size between 16 and 100.", 16));
    }

    clearGrid();
    createGrid(newSize);
});