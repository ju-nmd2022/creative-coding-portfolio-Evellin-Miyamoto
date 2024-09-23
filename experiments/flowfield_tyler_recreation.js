// Jönköping University
// Creative Coding course - 2024
// Evellin Miyamoto
// Recreation of Tyler Hobbs flowfield

// Based on the Garrit's class
// Adapted the code from this tutorial https://www.youtube.com/watch?v=To3dtYEQaf4&list=PLnJOmsprq3bE0QLbe7wZ8yb1-Dt0FBcP5&index=19

function setup() {
  createCanvas(innerWidth, innerHeight);
  colorMode(HSB);
  background(240, 0, 95);
  stroke(5, 75, 100);
  strokeWeight(3);
  gridCellSize = (width - borders * 2) / columnGrid;
}

let borders = 0;
let columnGrid = 100;
let gridCellSize;
let noiseResolution = 0.003;

function lines() {
  //grid
  for (x = borders; x < width - borders + 1; x += gridCellSize) {
    for (y = borders; y < height - borders + 1; y += gridCellSize) {
      let oldX = x;
      let oldY = y;
      for (i = 0; i < 10; i++) {
        //length of each small segment
        let noiseSize = noise(oldX * noiseResolution, oldY * noiseResolution);
        //segment length between 1% - 20% of the gridcellsize
        let segmentLength = map(
          noiseSize,
          0,
          1,
          gridCellSize * 0.01,
          gridCellSize * 0.3
        );

        //noise for direction
        let noiseValue =
          noise(oldX * noiseResolution, oldY * noiseResolution) + 0.03;
        let angle = map(noiseValue, 0.3, 0.7, 0, PI * 2);

        let newX = cos(angle) * segmentLength + oldX;
        let newY = sin(angle) * segmentLength + oldY;

        line(oldX, oldY, newX, newY);

        //update starting point for the next part
        oldX = newX;
        oldY = newY;
      }
    }
  }
}

function draw() {
  noLoop();
  lines();
}
