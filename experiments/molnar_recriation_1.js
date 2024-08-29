// Jönköping University
// Creative Coding course - 2024
// Evellin Miyamoto
// Recriation of colors Molnar

// Based on Garrit's class of Molnar
// Used this tutorial as a helper and base - https://cagrimmett.com/2022/03/08/how-to-create-vera-molnars-structure-de-quadrilateres-in-p5-js/
// Used chatgpt to understand some parts, refresh memory and debug- https://chatgpt.com/share/7e418611-5716-4832-804a-4781220dac2f

function setup() {
  createCanvas(800, 800);
}
const squares = 6;
const size = 90;

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
  const squareColors = [];
  for (sc = 0; sc < squares * squares; sc++) {
    squareColors.push(random(colors));
  }

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
        stroke(squareColors[s]);
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
  background(30);
  noLoop();
  noFill();
  colorMode(RGB);
  drawSquares();
}
