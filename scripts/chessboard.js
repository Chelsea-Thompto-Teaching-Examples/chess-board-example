// Creating a function to contain the chessboard.
const makeBoard = function() {

  // Defining the variables for size and text content.
  var size = 8;
  var chessboard = '';

  // The 'for loop' controlling the lines.
  for (let i = 0; i < size; i++) {

    // The 'for loop' controlling the characters.
    for (let j = 0; j < size; j++) {

      // Checking board position for character value
      // and then assigning a character value to be
      // added to the string value of 'chessboard'.
      if ((i + j) % 2 == 0) {
        chessboard += '#';
      } else {
        chessboard += ' ';
      }
    }
    // Once the line is filled with characters equal
    // to the 'size', adding a new line character '\n'
    // to the string value of 'chessboard'.
    chessboard += '\n';
  }

  // Once the outer 'for loop' is complete thereby
  // completing the last row and character of the
  // board, print the result to the console using the
  // console.log() command.
  console.log(chessboard);
}

// Call the function makeBoard to execute the code
// defined within it's {}.
makeBoard();
