import fs = require('fs');
import { rps } from './rps';

try {
  // read contents of the file
  const data = fs.readFileSync('./input/input.txt', 'utf-8');

  // split the contents by new line
  const lines = data.split(/\r?\n/);

  console.log(`Total points by selected hands: ${rps(lines, false)}`);
  console.log(`Total points by wanted outcome: ${rps(lines, true)}`);
} catch (err) {
  console.error(err);
}
