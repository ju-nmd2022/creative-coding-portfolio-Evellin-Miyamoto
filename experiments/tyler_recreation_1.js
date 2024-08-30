// Jönköping University
// Creative Coding course - 2024
// Evellin Miyamoto
// Recreation of Tyler Hobbs

// Based on class live coding by Bassima

function setup() {
  createCanvas(innerWidth, innerHeight);
  background(235, 230, 230);
}

let flowerSize = 3;
let amountOfDaisies = 7;
let gap = 140;
let petals = 5;
let angle = 360 / petals;

function daisy() {
  for (let y = 0; y < petals; y++) {
    for (let x = 0; x < petals; x++) {
      //   noStroke();
      //   fill(255, 255, 250);
      //   ellipse(x, y, 10, 10);
      noFill();
      stroke(36, 141, 210);
      rect(x, y, 8, 50, 10);
      rotate(random());
    }
  }
}

function draw() {
  let y =
    (height - flowerSize * amountOfDaisies - gap * (amountOfDaisies - 1)) / 2;
  for (let i = 0; i < amountOfDaisies; i++) {
    let x =
      (width - flowerSize * amountOfDaisies - gap * (amountOfDaisies - 1)) / 2;
    for (let a = 0; a < amountOfDaisies; a++) {
      push();
      translate(x, y);
      daisy();
      pop();
      stroke(36, 141, 210);
      fill(235, 230, 230);
      ellipse(x, y, 21, 23);
      x += flowerSize + gap;
    }
    y += flowerSize + gap;
  }
  noLoop();
}
