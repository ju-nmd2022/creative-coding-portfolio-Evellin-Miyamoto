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
  stroke(0, 200);
  strokeWeight(3);
}

let borders = 0;
let columnGrid = 50;
let gridCellSize = (width - borders * 2) / columnGrid;

function lines() {
  //grid
  for (x = borders; x < width - borders + 1; x += gridCellSize) {
    for (y = borders; y < height - borders + 1; y += gridCellSize) {
      let oldX = x;
      let oldY = y;
    }
  }
}

function draw() {}
