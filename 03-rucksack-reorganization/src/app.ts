import fs = require('fs');
import { rucksack } from './rucksack';

// read contents of the file
const data = fs.readFileSync('./input/input.txt', 'utf-8');

// split the contents by new line
const lines = data.split(/\r?\n/);

// Check if the last row is empty
if (lines[lines.length - 1] === '') {
  lines.pop();
}

console.log(`Sum of same items: ${rucksack(lines, 1)}`);
console.log(`Sum of group badge items: ${rucksack(lines, 2)}`);
