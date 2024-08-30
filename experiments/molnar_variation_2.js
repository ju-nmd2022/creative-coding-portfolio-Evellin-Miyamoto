// Jönköping University
// Creative Coding course - 2024
// Evellin Miyamoto
// Recriation of colors Molnar - variation 1

// Based on Garrit's class of Noise
// Based on the help got from Garrit in the lab

function setup() {
  createCanvas(800, 800);
  frameRate(3);
  colorMode(HSB);
}
const squares = 6;
const size = 90;
const divider = 5;
let counter = 0;

function drawSquares() {
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
        let noiseValue = noise(x / divider, y / divider, counter) * 255; // Generates noise value between 0 and 1 times color
        stroke(noiseValue, 200, 200);
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
        s++;
      }
    }
  }
}

function draw() {
  background(10);
  noFill();
  drawSquares();
  counter += 0.5;
}
