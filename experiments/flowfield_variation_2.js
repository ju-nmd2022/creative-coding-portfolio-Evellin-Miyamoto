// Jönköping University
// Creative Coding course - 2024
// Evellin Miyamoto
// Variation of Tyler Hobbs flowfield

// Based on the Garrit's class
// Adapted the code from this tutorial https://www.youtube.com/watch?v=To3dtYEQaf4&list=PLnJOmsprq3bE0QLbe7wZ8yb1-Dt0FBcP5&index=19
// Inspired by this tutorial https://www.youtube.com/watch?v=E7BD3vS-WbY

function setup() {
  createCanvas(innerWidth, innerHeight);
  colorMode(HSB);
  background(240, 0, 95);
  stroke(5, 75, 100);
  strokeWeight(3);
}

let borders = 0;
let columnGrid = 50;
let gridCellSize = (width - borders * 2) / columnGrid;
let noiseResolution = 0.003;
let influenceRadius = 50;

function lines(mouseX, mouseY) {
  for (let x = borders; x < width - borders + 1; x += gridCellSize) {
    for (let y = borders; y < height - borders + 1; y += gridCellSize) {
      let oldX = x;
      let oldY = y;

      //distance grid point to the mouse
      let distanceToMouse = dist(x, y, mouseX, mouseY);

      for (let i = 0; i < 10; i++) {
        //length of each small segment
        let noiseSize = noise(oldX * noiseResolution, oldY * noiseResolution);
        let segmentLength = map(
          noiseSize,
          0,
          1,
          gridCellSize * 0.01,
          gridCellSize * 0.3
        );

        let noiseValue;
        let angle;

        if (distanceToMouse < influenceRadius) {
          //vector for the current line position
          let currentPosition = createVector(oldX, oldY);
          //vector for the mouse position
          let mousePosition = createVector(mouseX, mouseY);
        } else {
          noiseValue =
            noise(oldX * noiseResolution, oldY * noiseResolution) + 0.03;
          angle = map(noiseValue, 0, 1, 0, PI * 2);
        }

        let newX = cos(angle) * segmentLength + oldX;
        let newY = sin(angle) * segmentLength + oldY;

        line(oldX, oldY, newX, newY);

        oldX = newX;
        oldY = newY;
      }
    }
  }
}

function draw() {
  background(240, 0, 95);
  lines(mouseX, mouseY);
}
