import { camp } from "./camp";

const lines = [
  '2-4,6-8',
  '2-3,4-5',
  '5-7,7-9',
  '2-8,3-7',
  '6-6,4-6',
  '2-6,4-8'
];

describe('Tests', () => {
  test('Part 1', () => {
    const results = camp(lines, 1);
    expect(results).toEqual(15);
  });

  // test('Part 2', () => {
  //   const results = rucksack(lines);
  //   expect(results).toEqual(12);
  // });
});
