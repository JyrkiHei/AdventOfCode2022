import fs = require('fs');
import readline = require('readline');

const rl = readline.createInterface({
  input: fs.createReadStream('./input/input.txt'),
  output: process.stdout,
  terminal: false,
});

const calories: number[] = [];
let index = 0;
let sumOfCalories = 0;

// Read all content
rl.on('line', line => {
  sumCalories(line);
});

// When read is completed, do the calculations
rl.on('close', () => {
  doCalculations();
});

const sumCalories = (line: string) => {
  sumOfCalories = sumOfCalories + +line; // Sum up the calories

  // If we reach empty row, go to next elf
  if (line.length === 0) {
    calories[index] = sumOfCalories; // Store sum for current elf
    index++; // Go to the next one
    sumOfCalories = 0; // Reset counter
  }
};

const doCalculations = () => {
  // Print the calories and find the largest sum
  let highest = 0;
  let elfIndex = 0;

  for (let i = 0; i < calories.length; i++) {
    if (calories[i] > highest) {
      highest = calories[i];
      elfIndex = i;
    }
  }

  console.log(
    `The Elf with the highest calories is ${elfIndex} with ${calories[elfIndex]} calories`
  );
};
