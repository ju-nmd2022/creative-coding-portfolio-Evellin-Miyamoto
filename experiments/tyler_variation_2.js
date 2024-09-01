// Jönköping University
// Creative Coding course - 2024
// Evellin Miyamoto
// Variation 2 of Tyler Hobbs

// Based on class live coding by Bassima
// Based on Garrit class of Perlin Noise
// Used the p5 reference https://p5js.org/reference/p5/noise/

function setup() {
  createCanvas(innerWidth, innerHeight);
  colorMode(HSB);
  frameRate(2);
}

let flowerSize = 3;
let amountOfDaisies = 7;
let gap = 120;
let petals = 5;
let noiseCounter = 0;

function daisy(size) {
  // let saturation = random(20, 100);
  for (let y = 0; y < petals; y++) {
    for (let x = 0; x < petals; x++) {
      noFill();
      stroke(210, saturation, 75);
      rect(x * size, y * size, size * 3, size * 10, 10);
      rotate(360);
    }
  }
}

function draw() {
  background(240);
  let y =
    (height - flowerSize * amountOfDaisies - gap * (amountOfDaisies - 1)) / 2;
  for (let i = 0; i < amountOfDaisies; i++) {
    let x =
      (width - flowerSize * amountOfDaisies - gap * (amountOfDaisies - 1)) / 2;
    for (let a = 0; a < amountOfDaisies; a++) {
      push();
      translate(x, y);

      //perlin noise to daisies change size
      let noiseValueSize = noise(noiseCounter);
      let flowerSizing = floor(map(noiseValueSize, 0, 1, 0, 5));
      daisy(flowerSizing);

      pop();
      stroke(210, 75, 75);
      fill(235, 0, 90);
      ellipse(x, y, flowerSizing * 5, flowerSizing * 5);
      x += flowerSize + gap;
      noiseCounter += 0.1;
    }
    y += flowerSize + gap;
  }
}
