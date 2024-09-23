// Jönköping University
// Creative Coding course - 2024
// Evellin Miyamoto
// Adding sound to Tyler's recreation

// Based on class live coding by Bassima
// Based on Garrit class of Perlin Noise
// Used the p5 reference https://p5js.org/reference/p5/noise/
//https://medium.com/@otha.hernandez/an-introduction-to-creating-a-synth-with-tone-js-1aa8a51acbd5 used as a base to increment the sound effects
//https://github.com/pixelkind/automatone/blob/main/automatone.js used as a base to increment the sound effects

let synth;
let flowerSize = 3;
let amountOfDaisies = 7;
let gap = 120;
let petals = 5;
let noiseCounter = 0;

// let notesC = ["C3", "D3", "E3", "G3", "A3"];
// let notesD = ["D5", "E5", "F5", "A5", "B5"];
// let notesE = ["E6", "F6♯", "G6♯", "B6", "C6♯"];

let notes = ["C3", "D3", "E3", "G3", "A3", "C4", "D4", "E4", "G4"];

let envelope = {
  attack: 0.1,
  decay: 0.2,
  sustain: 0.3,
  release: 1,
};

let oscilator = {
  type: "sine",
};

function setup() {
  createCanvas(innerWidth, innerHeight);
  background(235, 230, 230);
  colorMode(HSB);
  frameRate(2);
  synth = new Tone.PolySynth(oscilator, envelope).toDestination();
}
function daisy() {
  let saturation = random(20, 100);
  //map saturation from 20 to 100 to the notes lenght
  let noteIndex = floor(map(saturation, 20, 100, 0, notes.length - 1));

  //   synth.triggerAttackRelease(notesC[noteIndex], 0.3);
  synth.triggerAttackRelease(notes[noteIndex], 1);
  //   synth.triggerAttackRelease(notesE[noteIndex], 1);

  for (let y = 0; y < petals; y++) {
    for (let x = 0; x < petals; x++) {
      noFill();
      stroke(210, saturation, 75);
      rect(x, y, 8, 50, 10);
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
      //perlin noise to make the daisies spin
      let noiseValue = noise(noiseCounter);
      let rotation = floor(map(noiseValue, 0, 1, 0, PI));
      rotate(rotation);
      daisy();
      pop();
      stroke(210, 75, 75);
      fill(235, 0, 90);
      ellipse(x, y, 23, 22);
      x += flowerSize + gap;
      noiseCounter += 0.1;
    }
    y += flowerSize + gap;
  }
}
