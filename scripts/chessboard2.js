// The variables for the scene
let canvas;
let size = 8;
let tileSize = 50;
let border = 50;
let canvasWidth = (size*tileSize)+(border*2);
let canvasHeight = (size*tileSize)+(border*2);

// The setup function to create and place the canvas and run
// the board function.
function setup() {
  canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent('chess-board-2');
  noStroke();
  // The board function being called
  makeBoard2();
}

// The draw function is empty in this example.
function draw() {
}

// The function housing the nested for loop
let makeBoard2 = function() {
  background(120);
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      if ((i + j) % 2 == 0) {
        // The color being set for the tile.
        fill(0);
      } else {
        // The color being set for the tile.
        fill(255);
      }
      // Draw the tile with the given color.
      rect(border+(i*tileSize), border+(j*tileSize), tileSize);
    }
  }
}
