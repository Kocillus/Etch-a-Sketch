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
 
boardFullfilment(40);
 
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
    if ((e.target.tagName != "BUTTON") && (e.target.tagName != "INPUT")){
      click = !click;
      if (click) {
        document.querySelector("#mode").textContent = "COLORING MODE";
        document.getElementById("mode").style.backgroundColor = "rgba(255, 196, 0, 0.788)";
      } else {
        document.querySelector("#mode").textContent = "NOT COLORING MODE";
        document.getElementById("mode").style.backgroundColor = "rgba(65, 65, 65, 0.151)";
        }
      }
    }
  );

  
    function colorSquares(square) {
    if (click) {
      if (currentAction === "currentColor") {
        square.style.backgroundColor = currentColor;
        document.getElementById("singleColor").style.backgroundColor = "rgba(255, 196, 0, 0.788)";
        document.getElementById("rainbowMadness").style.backgroundColor = "rgba(255, 255, 255, 0.9)";
        document.getElementById("eraser").style.backgroundColor = "rgba(255, 255, 255, 0.9)";
      } 

      if (currentAction === "rainbowMadness") {
        square.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        document.getElementById("singleColor").style.backgroundColor = "rgba(255, 255, 255, 0.9)";
        document.getElementById("rainbowMadness").style.backgroundColor = "rgba(255, 196, 0, 0.788)";
        document.getElementById("eraser").style.backgroundColor = "rgba(255, 255, 255, 0.9)";
      } 
 
      if (currentAction === "eraser") {
        square.style.backgroundColor = "white";
        document.getElementById("singleColor").style.backgroundColor = "rgba(255, 255, 255, 0.9)";
        document.getElementById("rainbowMadness").style.backgroundColor = "rgba(255, 255, 255, 0.9)";
        document.getElementById("eraser").style.backgroundColor = "rgba(255, 196, 0, 0.788)";
      } 
    }
  }