// Jönköping University
// Creative Coding course - 2024
// Evellin Miyamoto
// Recriation of colors Molnar - variation 1

// Based on Garrit's class of Noise

function setup() {
  createCanvas(innerWidth, innerHeight);
  frameRate(8);
}
const squares = 6;
const size = 90;
const divider = 5;
let counter = 0;

function drawSquares() {
  let colors = [
    color(255, 0, 0),
    color(255, 255, 0),
    color(0, 255, 0),
    color(0, 0, 255),
    color(255, 0, 255),
    color(255, 255, 255),
    color(0, 255, 255),
  ];

  for (i = 0; i < 10; i++) {
    //to draw the grids
    //square counter
    let s = 0;
    //nested loop
    for (y = 0; y < squares; y++) {
      for (x = 0; x < squares; x++) {
        push();
        //change the middle
        translate(width / 14 + x * size, height / 14 + y * size);
        let noiseValue = noise(x / divider, y / divider, counter); // Generates noise value between 0 and 1
        let colorIndex = floor(map(noiseValue, 0, 1, 0, colors.length)); // Map noise to color index, floor to get a whole number
        stroke(colors[colorIndex]);
        quad(
          random(-8, 10),
          random(-8, 10),
          random(size / 2 - 6, size + 8),
          random(-6, 6),
          random(size / 2 - 6, size + 8),
          random(size / 2 - 6, size + 8),
          random(-6, 6),
          random(size / 2 - 6, size + 8)
        );
        pop();
        counter += 0.05;
      }
    }
  }
}

function draw() {
  background(30);
  //   noLoop();
  noFill();
  colorMode(RGB);
  drawSquares();
}
