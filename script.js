function boardFullfilment(size) {
    let grid = document.querySelector('.gridBox')
    let squares = grid.querySelectorAll("div");
    squares.forEach((div) => div.remove());
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let amount = size * size;
    for (let i = 0; i < amount; i++) {
        let square = document.createElement('div');
        square.style.backgroundColor = "blue";
        grid.insertAdjacentElement("beforeend", square);
    }
}

boardFullfilment(16);

function changeSize(input) {
    boardFullfilment(input)
}