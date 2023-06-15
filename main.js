click = true;
let currentColor = "#FCAE1E";
let currentAction = "currentColor"
 
function boardFullfilment(size) {
    let grid = document.querySelector('.gridBox')
    let squares = grid.querySelectorAll("div");
    squares.forEach((div) => div.remove());
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;
 
    let amount = size * size;
    for (let i = 0; i < amount; i++) {
        let square = document.createElement('div');
        square.addEventListener("mouseover", event => colorSquares(square));
        square.style.backgroundColor = "white";
        grid.insertAdjacentElement("beforeend", square);
    }
 
    document.getElementById("gridSizeOptionsOutput").innerHTML = size + ' x ' + size;
}
 
boardFullfilment(20);
 
function changeSize(input) {
    boardFullfilment(input);
}
 
  function clearBoard() {
    let grid = document.querySelector('.gridBox')
    let squares = grid.querySelectorAll("div");
    squares.forEach((div) => (div.style.backgroundColor = "white"));
  }

  function changeAction(choice) {
    currentAction = choice;
  }
 
  function changeColor(col) {
    currentColor=col;
  }

  document.querySelector("body").addEventListener("click", (e) => {
    if (e.target.tagName != "BUTTON") {
      click = !click;
      if (click) {
        let coloringMode = true;
        document.querySelector("#mode").textContent = "COLORING MODE";
        document.getElementById("mode").style.backgroundColor = "green";
      } else {
        let coloringMode = false;
        document.querySelector("#mode").textContent = "NOT COLORING MODE";
        document.getElementById("mode").style.backgroundColor = "gray";
        }
      }
    }
  );

  let  coloringMode = true
  
    function colorSquares(square) {
    if (click) {
      if (currentAction === "currentColor") {
        square.style.backgroundColor = currentColor;
      } 

      if (currentAction === "rainbowMadness") {
        square.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
      } 
 
      if (currentAction === "eraser") {
        square.style.backgroundColor = "white";
      } 
    }
  }