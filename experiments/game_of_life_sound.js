// Jönköping University
// Creative Coding course - 2024
// Evellin Miyamoto
// Sound on game of life variation

// Based on the Garrit's class and code: https://codepen.io/pixelkind/pen/LYMRedE
// Based on Garrit's class about tone.js and code: https://codepen.io/pixelkind/pen/RwEVVaw?editors=1010
// https://tonejs.github.io/

let synth;
function setup() {
  createCanvas(innerWidth, innerHeight);
  synth = new Tone.PolySynth().toDestination();
}

class Cell {
  constructor(x, y, state) {
    this.x = x;
    this.y = y;
    this.state = state;
    this.newState = -1;
  }

  draw(size) {
    if (this.state == 0) {
      fill(255, 204, 255);
    } else {
      fill(255, 0, 255);
    }
    triangle(
      this.x * size,
      this.y * size,
      this.x * size + size,
      this.y * size,
      this.x * size + size / 2,
      this.y * size + size
    );
  }
}

let board = [];
let size = 10;
let lifecycle = 5;
let count = 0;
let boardsize = 200;

for (let i = 0; i < boardsize; i++) {
  board.push([]);
  for (let j = 0; j < boardsize; j++) {
    //random (0 or 1)
    let state = Math.round(Math.random() % 1);
    let cell = new Cell(i, j, state);
    board[i].push(cell);
  }
}

function calculateNewState(x, y) {
  // count neighbour cells
  let startX = Math.max(0, x - 1);
  let startY = Math.max(0, y - 1);
  let endX = Math.min(board.length, x + 2);
  let endY = Math.min(board[x].length, y + 2);

  let values = [];
  for (let i = startX; i < endX; i++) {
    let cells = board[i].slice(startY, endY);
    values = values.concat(cells);
  }
  // count the number of living cells
  let liveCells = values.filter((cell) => cell.state === 1);
  let currentState = board[x][y].state;
  if (liveCells.length === 3) {
    board[x][y].newState = 1;
  } else if (liveCells.length === 4) {
    board[x][y].newState = currentState;
  } else {
    board[x][y].newState = 0;
  }
  // 2 = 0
  // 4 = same
  // 3 = 1
  // >5 = 0
}

function mousePressed() {
  let radius = 5;
  let x = Math.floor(mouseX / size);
  let y = Math.floor(mouseY / size);

  //loop to check if they are within the radius
  for (let i = 0; i < boardsize; i++) {
    for (let j = 0; j < boardsize; j++) {
      let distance = dist(x, y, i, j);
      //if distance is (less than equal)within the radius, change the state
      if (distance <= radius) {
        board[i][j].state = (board[i][j].state + 1) % 2;
      }
    }
  }

  let notesC = ["C3", "D3", "E3", "G3", "A3"];
  let notesD = ["D5", "E5", "F5", "A5", "B5"];
  let notesE = ["E6", "F6♯", "G6♯", "B6", "C6♯"];
  synth.triggerAttackRelease(random(notesC), 0.3);
  synth.triggerAttackRelease(random(notesD), 0.5);
  synth.triggerAttackRelease(random(notesE), 0.5);
  //   synth.triggerAttackRelease(random(notes), 1.5);
}

//   synth.triggerAttackRelease("E4", "10n");
//   synth.triggerAttackRelease("E5", "10n");
// }

function draw() {
  if (count == 0) {
    noStroke();

    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board[i].length; j++) {
        board[i][j].draw(size);
        calculateNewState(i, j);
      }
    }

    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board[i].length; j++) {
        board[i][j].state = board[i][j].newState;
      }
    }
  }
  count++;
  if (count == lifecycle) {
    count = 0;
  }
}

/*
      Any live cell with fewer than two live neighbours dies, as if by underpopulation.
      Any live cell with two or three live neighbours lives on to the next generation.
      Any live cell with more than three live neighbours dies, as if by overpopulation.
      Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.
      */
