import { rucksack } from './rucksack';

const lines = [
  'vJrwpWtwJgWrhcsFMMfFFhFp',
  'jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL',
  'PmmdzqPrVvPwwTWBwg',
  'wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn',
  'ttgJtRGJQctTZtZT',
  'CrZsJsPPZsGzwwsLwLmpwMDw'
];

describe('Tests', () => {
  test('Part 1', () => {
    const results = rucksack(lines);
    expect(results).toEqual(15);
  });

  // test('Part 2', () => {
  //   const results = rucksack(lines);
  //   expect(results).toEqual(12);
  // });
});
