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
    event.target.style.backgroundColor = "red";
}

function clearGrid() {
    const main = document.querySelector(".main");
    main.removeEventListener("mouseover", setBackgroundColor);

    const squares = document.querySelectorAll(".square");
    squares.forEach((square) => {
        square.remove();
    });
}

const button = document.querySelector(".resize-button");
button.addEventListener("click", () => {
    let newSize;

    while (!Number.isInteger(newSize) || newSize < 16 || newSize > 100) {
        newSize = parseInt(prompt("Choose a new size between 16 and 100.", 16));
    }

    clearGrid();
    createGrid(newSize);
});