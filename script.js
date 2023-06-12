click = true;
let currentColor = "black";

function boardFullfilment(size) {
    let grid = document.querySelector('.gridBox')
    let squares = grid.querySelectorAll("div");
    squares.forEach((div) => div.remove());
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let amount = size * size;
    for (let i = 0; i < amount; i++) {
        let square = document.createElement('div');
        square.addEventListener("mouseover", colorSquares);
        square.style.backgroundColor = "white";
        grid.insertAdjacentElement("beforeend", square);
    }

    document.getElementById("gridSizeOptionsOutput").innerHTML = size + ' x ' + size;
}

boardFullfilment(20);

function changeSize(input) {
    boardFullfilment(input);
}

function colorSquares() {
    if (click) {
      if (color === "currentColor") {
        this.style.backgroundColor = currentColor;
      } 

      if (color === "shadowing") {
        this.style.backgroundColor = currentColor;
      } 
      
      if (color === "rainbowMadness") {
        this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
      } 

      if (color === "eraser") {
        this.style.backgroundColor = "white";
      } 

      if (color === "clear") {
        let grid = document.querySelector('.gridBox')
        let squares = grid.querySelectorAll("div");
        squares.forEach((div) => (div.style.backgroundColor = "white"));
      }
    }
  }

  function changeColor(choice) {
    color = choice;
  }
