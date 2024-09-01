// Jönköping University
// Creative Coding course - 2024
// Evellin Miyamoto
// Recreation of Tyler Hobbs

// Based on class live coding by Bassima

function setup() {
  createCanvas(innerWidth, innerHeight);
  background(235, 230, 230);
  colorMode(HSB);
}

let flowerSize = 3;
let amountOfDaisies = 7;
let gap = 120;
let petals = 5;

function daisy() {
  let saturation = random(20, 100);
  for (let y = 0; y < petals; y++) {
    for (let x = 0; x < petals; x++) {
      noFill();
      stroke(210, saturation, 75);
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
      stroke(210, 75, 75);
      fill(235, 0, 90);
      ellipse(x, y, 23, 22);
      x += flowerSize + gap;
    }
    y += flowerSize + gap;
  }
  noLoop();
}
