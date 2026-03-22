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